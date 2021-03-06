import { Store } from './Store';
import { getEmptyStoreNameError } from './getEmptyStoreNameError';
import { getStorePath } from './getStorePath';
import { splitStorePath } from './splitStorePath';
import { makeGetStoreState } from './makeGetStoreState';
import { StoreState } from './StoreState';
import { makeCreateStoreSelector } from './makeCreateStoreSelector';

/**
 * Создает хранилище с указанным именем.
 * @param name Полное имя хранилища.
 * @param initialState Начальное состояние хранилища.
 */
export const createStore = <S extends StoreState>(name: string): Store<S> => {
  if (!name) {
    throw new Error(getEmptyStoreNameError());
  }

  const path = getStorePath(name);
  const [baseName, parentName] = splitStorePath(path);
  const getState = makeGetStoreState<S>(path);
  const createSelector = makeCreateStoreSelector(getState);

  return {
    name,
    baseName,
    parentName,
    path,
    getState,
    createSelector
  };
};
