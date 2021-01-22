// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types';

export * from './testingRelayRococo';
export * from './testingRelayWestend';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

export function createTesting (t: TFunction): LinkOption[] {
  return expandEndpoints(t, [
    // polkadot test relays
    createRococo(t),
    // alphabetical based on chain name
    {
      info: 'centrifuge',
      isDisabled: true,
      text: t('rpc.amber', 'Amber', { ns: 'apps-config' }),
      providers: {
        Centrifuge: 'wss://fullnode.amber.centrifuge.io'
      }
    },
    {
      info: 'cere',
      text: t('rpc.cere', 'Cerebellum Network', { ns: 'apps-config' }),
      providers: {
        CerebellumNetwork: 'ws://167.172.106.143:9944'
      }
    },
    {
      info: 'nodle',
      isDisabled: true,
      text: t('rpc.nodle-arcadia', 'Arcadia', { ns: 'apps-config' }),
      providers: {
        Nodle: 'wss://arcadia1.nodleprotocol.io'
      }
    },
    {
      info: 'edgeware',
      isDisabled: true,
      text: t('rpc.beresheet', 'Beresheet', { ns: 'apps-config' }),
      providers: {
        'Commonwealth Labs': 'wss://beresheet1.edgewa.re'
      }
    },
    {
      info: 'bifrost',
      isDisabled: true,
      text: t('rpc.bifrost', 'Bifrost Asgard', { ns: 'apps-config' }),
      providers: {
        Bifrost: 'wss://testnet.liebi.com'
      }
    },
    {
      info: 'canvas',
      isDisabled: true,
      text: t('rpc.canvas', 'Canvas', { ns: 'apps-config' }),
      providers: {
        Parity: 'wss://canvas-rpc.parity.io'
      }
    },
    {
      info: 'crust',
      isDisabled: true,
      text: t('rpc.crust.network', 'Crust Maxwell CC2', { ns: 'apps-config' }),
      providers: {
        'Crust Network': 'wss://api.crust.network/'
      }
    },
    {
      info: 'datahighway',
      isDisabled: true,
      text: t('rpc.datahighway.harbour', 'Harbour', { ns: 'apps-config' }),
      providers: {
        MXC: 'wss://testnet-harbour.datahighway.com'
      }
    },
    {
      info: 'dock-testnet',
      isDisabled: true,
      text: t('rpc.dock-testnet', 'Dock', { ns: 'apps-config' }),
      providers: {
        'Dock Association': 'wss://danforth-1.dock.io'
      }
    },
    {
      info: 'dusty',
      isDisabled: true,
      text: t('rpc.dusty', 'Dusty', { ns: 'apps-config' }),
      providers: {
        'Stake Technologies': 'wss://rpc.dusty.plasmnet.io/'
      }
    },
    {
      info: 'encointer_cantillon',
      isDisabled: true,
      text: t('rpc.encointer.cantillon', 'Encointer Cantillon', { ns: 'apps-config' }),
      providers: {
        'Encointer Association': 'wss://cantillon.encointer.org'
      }
    },
    {
      info: 'encointer_gesell',
      isDisabled: true,
      text: t('rpc.encointer.gesell', 'Encointer Gesell', { ns: 'apps-config' }),
      providers: {
        'Encointer Association': 'wss://gesell.encointer.org'
      }
    },
    {
      info: 'equilibrium',
      isDisabled: true,
      text: t('rpc.equilibriumtestnet', 'Equilibrium', { ns: 'apps-config' }),
      providers: {
        Equilibrium: 'wss://api.mvp.testnet.equilibrium.io'
      }
    },
    {
      info: 'substrate',
      isDisabled: true,
      text: t('rpc.flamingfir', 'Flaming Fir', { ns: 'apps-config' }),
      providers: {
        Parity: 'wss://substrate-rpc.parity.io'
      }
    },
    {
      info: 'galois',
      isDisabled: true,
      text: t('rpc.galois', 'Galois', { ns: 'apps-config' }),
      providers: {
        MathWallet: 'wss://galois.maiziqianbao.net/ws'
      }
    },
    {
      info: 'jupiter',
      isDisabled: true,
      text: t('rpc.jupiter', 'Jupiter', { ns: 'apps-config' }),
      providers: {
        Elara: 'wss://jupiter.elara.patract.io'
      }
    },
    {
      info: 'jupiter',
      isDisabled: true,
      text: t('rpc.jupiter', 'Jupiter', { ns: 'apps-config' }),
      providers: {
        Patract: 'wss://ws.jupiter.patract.cn'
      }
    },
    {
      info: 'acala',
      isDisabled: true,
      text: t('rpc.mandala', 'Mandala', { ns: 'apps-config' }),
      providers: {
        Acala: 'wss://node-6714447553211260928.rz.onfinality.io/ws'
      }
    },
    {
      info: 'kilt',
      isDisabled: true,
      text: t('rpc.kilt', 'Mashnet', { ns: 'apps-config' }),
      providers: {
        'KILT Protocol': 'wss://full-nodes.kilt.io:9944/'
      }
    },
    {
      info: 'moonbaseAlpha',
      isDisabled: true,
      text: t('rpc.moonbeam', 'Moonbase Alpha', { ns: 'apps-config' }),
      providers: {
        'Moonbeam Network': 'wss://wss.testnet.moonbeam.network'
      }
    },
    {
      info: 'phala',
      isDisabled: true,
      text: t('rpc.phala', 'Phala PoC-3', { ns: 'apps-config' }),
      providers: {
        'Phala Network': 'wss://poc3a.phala.network/ws'
      }
    },
    {
      info: 'polkadex',
      isDisabled: true,
      text: t('rpc.polkadex', 'Polkadex', { ns: 'apps-config' }),
      providers: {
        'Polkadex Team': 'wss://blockchain.polkadex.trade'
      }
    },
    {
      info: 'polkabtc',
      isDisabled: true,
      text: t('rpc.polkabtc', 'PolkaBTC', { ns: 'apps-config' }),
      providers: {
        Interlay: 'wss://alpha.polkabtc.io/api/parachain'
      }
    },
    {
      info: 'laminar',
      isDisabled: true,
      text: t('rpc.turbulence', 'Turbulence', { ns: 'apps-config' }),
      providers: {
        Laminar: 'wss://testnet-node-1.laminar-chain.laminar.one/ws'
      }
    },
    {
      info: 'sora-substrate',
      isDisabled: true,
      text: t('rpc.sora-substrate', 'SORA-staging', { ns: 'apps-config' }),
      providers: {
        Soramitsu: 'wss://ws.stage.sora2.soramitsu.co.jp'
      }
    },
    {
      dnslink: 'westend',
      info: 'westend',
      isDisabled: true,
      text: t('rpc.westend', 'Westend', { ns: 'apps-config' }),
      providers: {
        Parity: 'wss://westend-rpc.polkadot.io'
      }
    },
    {
      info: 'zero',
      isDisabled: true,
      text: t('rpc.zero', 'Zero', { ns: 'apps-config' }),
      providers: {
        ZERO: 'wss://alphaville-0.zero.io'
      }
    },
    {
      info: 'uniarts',
      isDisabled: true,
      text: t('rpc.uniarts', 'Uniarts', { ns: 'apps-config' }),
      providers: {
        Uniarts: 'wss://testnet.uniarts.me'
      }
    }
  ]);
}
