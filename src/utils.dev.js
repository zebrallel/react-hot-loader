import { blacklistByType, getProxyByType, setComponentOptions } from './reconciler/proxies';
import { setConfiguration } from './configuration';
import { hotComponentCompare } from './reconciler/componentComparator';

const getProxyOrType = type => {
  const proxy = getProxyByType(type);
  return proxy ? proxy.get() : type;
};

// 判断两个component是否相同
export const areComponentsEqual = (a, b) => getProxyOrType(a) === getProxyOrType(b);

export const compareOrSwap = (oldType, newType) => hotComponentCompare(oldType, newType);

export const cold = type => {
  blacklistByType(type);
  return type;
};

export const configureComponent = (component, options) => setComponentOptions(component, options);

export const setConfig = config => setConfiguration(config);
