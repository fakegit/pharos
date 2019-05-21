import env from './env'

// const _rootDomainMap = {
//   development: 'local.pharos.cc',
//   test: 'local.pharos.net',
//   production: 'www.pharos.com',
// }


const apiUrlMap = {
  // 'dev': 'http://api.pharos.cc:8360',
  // 'development': 'http://api.pharos.net/',
  'development': 'http://127.0.0.1:8360/',
  'production': 'http://api.pharos.com/',
}

export const baseURL = apiUrlMap[env]
// export const rootDomain = _rootDomainMap[env] || _rootDomainMap.test