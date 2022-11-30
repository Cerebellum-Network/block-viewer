// Copyright 2017-2022 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import queryString from 'query-string';

import { createWsEndpoints } from '@polkadot/apps-config';
import { extractIpfsDetails } from '@polkadot/react-hooks/useIpfs';
import { settings } from '@polkadot/ui-settings';
import { assert } from '@polkadot/util';

export function validateURL (url: string): boolean {
  if (!/^wss?:\/\//.test(url)) {
    throw new Error('Non-prefixed ws/wss url');
  }

  const URLObj = new URL(url);
  const hostname = URLObj.hostname;
  const port = Number(URLObj.port);

  if (port && port > 64000) {
    throw new Error('Invalid ws port');
  }

  assert(/(.*.cere.network$)|(.*.republiccrypto.com$)|(^localhost$)|(^127.0.0.1$)/.test(hostname), 'Invalid ws url');

  return true;
}
  
function networkOrUrl (apiUrl: string): void {
  if (apiUrl.startsWith('light://')) {
    console.log('Light endpoint=', apiUrl.replace('light://', ''));
  } else {
    console.log('WS endpoint=', apiUrl);
  }
}

function getApiUrl (): string {
  // we split here so that both these forms are allowed
  //  - http://localhost:3000/?rpc=wss://substrate-rpc.parity.io/#/explorer
  //  - http://localhost:3000/#/explorer?rpc=wss://substrate-rpc.parity.io
  const urlOptions = queryString.parse(location.href.split('?')[1]);

  // if specified, this takes priority
  if (urlOptions.rpc) {
    assert(!Array.isArray(urlOptions.rpc), 'Invalid WS endpoint specified');

    // https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9944#/explorer;
    const url = decodeURIComponent(urlOptions.rpc.split('#')[0]);

    if (validateURL(url)) {
      return url;
    }
  }

  const endpoints = createWsEndpoints(<T = string>(): T => ('' as unknown as T));
  const { ipnsChain } = extractIpfsDetails();

  // check against ipns domains (could be expanded to others)
  if (ipnsChain) {
    const option = endpoints.find(({ dnslink }) => dnslink === ipnsChain);

    if (option) {
      return option.value;
    }
  }

  const fallbackUrl = endpoints.find(({ value }) => !!value);

  // via settings, or the default chain
  const urls = endpoints.map((endpoint) => endpoint.value).filter((url) => !!url);

  return [...urls, process.env.WS_URL].includes(settings.apiUrl)
    ? settings.apiUrl // keep as-is
    : fallbackUrl
      ? fallbackUrl.value // grab the fallback
      : 'ws://127.0.0.1:9944'; // nothing found, go local
}

// There cannot be a Substrate Connect light client default (expect only jrpc EndpointType)
const apiUrl = getApiUrl();

// set the default as retrieved here
settings.set({ apiUrl });

networkOrUrl(apiUrl);
