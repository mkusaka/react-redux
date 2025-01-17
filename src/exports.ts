import Provider from './components/Provider'
import type { ProviderProps } from './components/Provider'
import connectAdvanced from './components/connectAdvanced'
import type {
  ConnectAdvancedOptions,
  ConnectProps,
} from './components/connectAdvanced'
import type {
  SelectorFactory,
  Selector,
  MapStateToProps,
  MapStateToPropsFactory,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
  MapDispatchToPropsParam,
  MapDispatchToPropsNonObject,
  MergeProps,
} from './connect/selectorFactory'
import { ReactReduxContext } from './components/Context'
import type { ReactReduxContextValue } from './components/Context'
import connect, { ConnectedProps } from './connect/connect'

import { useDispatch, createDispatchHook } from './hooks/useDispatch'
import { useSelector, createSelectorHook } from './hooks/useSelector'
import { useStore, createStoreHook } from './hooks/useStore'

import shallowEqual from './utils/shallowEqual'
import type { Subscription } from '../src/utils/Subscription'

export * from './types'
export type {
  ProviderProps,
  SelectorFactory,
  Selector,
  MapStateToProps,
  MapStateToPropsFactory,
  MapStateToPropsParam,
  ConnectProps,
  ConnectedProps,
  ConnectAdvancedOptions,
  MapDispatchToPropsFunction,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
  MapDispatchToPropsParam,
  MapDispatchToPropsNonObject,
  MergeProps,
  ReactReduxContextValue,
  Subscription,
}
export {
  Provider,
  connectAdvanced,
  ReactReduxContext,
  connect,
  useDispatch,
  createDispatchHook,
  useSelector,
  createSelectorHook,
  useStore,
  createStoreHook,
  shallowEqual,
}
