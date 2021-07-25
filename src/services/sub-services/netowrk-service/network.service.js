import axios from 'axios';
import _ from 'lodash';

const axiosInstance = axios.create();
const baseURL = 'https://blockchain.info/';

async function getMergedConfigs(customConfig) {
    const defaultConfig = await getDefaultConfig();

    const responseManipulator = _.get(
        customConfig,
        'responseManipulator',
        defaultConfig.responseManipulator
    );
    const { defaultRequestConfig } = defaultConfig;
    const requestConfig = _.merge(defaultRequestConfig, customConfig);

    return { requestConfig, responseManipulator };
}

async function makeGet(url, config) {
    const { requestConfig, responseManipulator } = await getMergedConfigs(
        config
    );

    return axiosInstance
        .get(url, requestConfig)
        .then((response) => responseManipulator(response));
}

async function makePost(url, data, config) {
    const { requestConfig, responseManipulator } = await getMergedConfigs(
        config
    );

    return axiosInstance
        .post(url, data, requestConfig)
        .then((response) => responseManipulator(response));
}

async function makePut(url, data, config) {
    const { requestConfig, responseManipulator } = await getMergedConfigs(
        config
    );

    return axiosInstance
        .put(url, data, requestConfig)
        .then((response) => responseManipulator(response));
}

async function makeDelete(url, data, config) {
    const { requestConfig, responseManipulator } = await getMergedConfigs(
        config
    );

    return axiosInstance
        .delete(url, requestConfig)
        .then((response) => responseManipulator(response));
}

async function getDefaultConfig() {
    const defaultRequestConfig = {
        baseURL,
    };

    return {
        defaultRequestConfig,
        responseManipulator: (response) => response.data,
    };
}

export default {
    makeGet,
    makePost,
    makeDelete,
    makePut,
};
