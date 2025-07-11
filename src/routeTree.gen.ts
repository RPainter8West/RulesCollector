/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { ServerRoute as ApiDebugServerRouteImport } from './routes/api/debug'
import { ServerRoute as ApiRulesIndexServerRouteImport } from './routes/api/rules/index'
import { ServerRoute as ApiRulesIdServerRouteImport } from './routes/api/rules/$id'

const rootServerRouteImport = createServerRootRoute()

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ApiDebugServerRoute = ApiDebugServerRouteImport.update({
  id: '/api/debug',
  path: '/api/debug',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiRulesIndexServerRoute = ApiRulesIndexServerRouteImport.update({
  id: '/api/rules/',
  path: '/api/rules/',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiRulesIdServerRoute = ApiRulesIdServerRouteImport.update({
  id: '/api/rules/$id',
  path: '/api/rules/$id',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/'
  id: '__root__' | '/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
}
export interface FileServerRoutesByFullPath {
  '/api/debug': typeof ApiDebugServerRoute
  '/api/rules/$id': typeof ApiRulesIdServerRoute
  '/api/rules': typeof ApiRulesIndexServerRoute
}
export interface FileServerRoutesByTo {
  '/api/debug': typeof ApiDebugServerRoute
  '/api/rules/$id': typeof ApiRulesIdServerRoute
  '/api/rules': typeof ApiRulesIndexServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/debug': typeof ApiDebugServerRoute
  '/api/rules/$id': typeof ApiRulesIdServerRoute
  '/api/rules/': typeof ApiRulesIndexServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/debug' | '/api/rules/$id' | '/api/rules'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/debug' | '/api/rules/$id' | '/api/rules'
  id: '__root__' | '/api/debug' | '/api/rules/$id' | '/api/rules/'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiDebugServerRoute: typeof ApiDebugServerRoute
  ApiRulesIdServerRoute: typeof ApiRulesIdServerRoute
  ApiRulesIndexServerRoute: typeof ApiRulesIndexServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/api/debug': {
      id: '/api/debug'
      path: '/api/debug'
      fullPath: '/api/debug'
      preLoaderRoute: typeof ApiDebugServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/rules/': {
      id: '/api/rules/'
      path: '/api/rules'
      fullPath: '/api/rules'
      preLoaderRoute: typeof ApiRulesIndexServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/rules/$id': {
      id: '/api/rules/$id'
      path: '/api/rules/$id'
      fullPath: '/api/rules/$id'
      preLoaderRoute: typeof ApiRulesIdServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiDebugServerRoute: ApiDebugServerRoute,
  ApiRulesIdServerRoute: ApiRulesIdServerRoute,
  ApiRulesIndexServerRoute: ApiRulesIndexServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
