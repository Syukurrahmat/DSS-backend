import {
    r as b,
    D as g,
    j as e,
    N as F,
    H as k,
    T as j,
    V as H,
    C as f,
} from './createReactComponent-m2GCamtz.js';
import {
    b as O,
    k as C,
    p as $,
    M as A,
    d as B,
    e as v,
    f as w,
    g as U,
    G as E,
    N as M,
    h as G,
    c as W,
    m as V,
    V as z,
} from './app-BlQRCkbL.js';
import { M as _, G as P } from './index-Dt6lv0Jl.js';
import { u as q } from './useApiResponseToast-CR3ZylCY.js';
import { T as J, b as K, c as Q } from './dateFormating-CjiM6gKV.js';
import { M as X } from './chunk-4FCEGNGT-DqvOsicM.js';
function oe({ subsInfo: s, ...c }) {
    const { toast: r, apiResponseToast: m } = q(),
        [n, o] = b.useState([]),
        [p, y] = b.useState(!1),
        { isOpen: D, onOpen: T, onClose: u } = O();
    let h = '',
        d = '',
        x = '';
    s.type == 'user'
        ? ((h = `/nodes/available?forUserSubs=${s.userId}`),
          (d = `${g}/users/${s.userId}/nodes`),
          (x = `/users/${s.userId}/remaining-subs-limit`))
        : ((h = `/nodes/available?forCompanySubs=${s.companyData.companyId}`),
          (d = `${g}/companies/${s.companyData.companyId}/nodes`),
          (x = `/companies/${s.companyData.companyId}/remaining-subs-limit`));
    const { data: l, mutate: S } = C(x, $),
        N = () =>
            r({
                title: 'Opsss',
                description: `Node yang diikuti dibatasi maksimal 5 node, 
Hapus node yang lain terlebih dahulu untuk menambahkan `,
                status: 'warning',
            }),
        I = (t) => {
            if (l !== void 0) {
                if (n.length >= l) return N();
                o((i) =>
                    i.find((a) => a.nodeId == t.nodeId)
                        ? i.filter((a) => a.nodeId !== t.nodeId)
                        : [...i, t]
                );
            }
        },
        L = async () => {
            if (!n.length)
                return r({
                    title: 'Opss',
                    description: 'Sepertinya Anda belum menambahkan Node',
                    status: 'warning',
                });
            y(!0);
            const t = n.map((a) => a.nodeId),
                i = await W.post(d, { nodeIds: t });
            S((a) => (a || 0) + n.length),
                m(i.data, {
                    onSuccess() {
                        V((a) => a && a[0] == d.replace(g, ''));
                    },
                }),
                y(!1),
                u();
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(F, {
                onClick: () => {
                    T(), S();
                },
                children: c.children,
            }),
            e.jsxs(A, {
                closeOnEsc: !1,
                closeOnOverlayClick: !1,
                size: '5xl',
                isOpen: D,
                onClose: u,
                onCloseComplete: () => o([]),
                children: [
                    e.jsx(B, {}),
                    e.jsxs(v, {
                        children: [
                            e.jsx(w, { children: 'Tambahkan node' }),
                            !p && e.jsx(X, {}),
                            e.jsx(U, {
                                py: '0',
                                children:
                                    l !== void 0
                                        ? e.jsx(e.Fragment, {
                                              children: l
                                                  ? e.jsxs(e.Fragment, {
                                                        children: [
                                                            e.jsxs(k, {
                                                                mb: '3',
                                                                alignItems: 'start',
                                                                children: [
                                                                    e.jsx(k, {
                                                                        wrap: 'wrap',
                                                                        minH: '35px',
                                                                        py: '1',
                                                                        px: '2',
                                                                        flexGrow: '1',
                                                                        rounded: 'md',
                                                                        border: '1px solid',
                                                                        borderColor: 'gray.200',
                                                                        children: n.length
                                                                            ? n.map(
                                                                                  ({
                                                                                      nodeId: t,
                                                                                      name: i,
                                                                                  }) =>
                                                                                      e.jsxs(
                                                                                          J,
                                                                                          {
                                                                                              colorScheme:
                                                                                                  'blue',
                                                                                              children:
                                                                                                  [
                                                                                                      e.jsx(
                                                                                                          K,
                                                                                                          {
                                                                                                              children:
                                                                                                                  i,
                                                                                                          }
                                                                                                      ),
                                                                                                      e.jsx(
                                                                                                          Q,
                                                                                                          {
                                                                                                              onClick:
                                                                                                                  () =>
                                                                                                                      o(
                                                                                                                          (
                                                                                                                              a
                                                                                                                          ) =>
                                                                                                                              a.filter(
                                                                                                                                  (
                                                                                                                                      R
                                                                                                                                  ) =>
                                                                                                                                      R.nodeId !==
                                                                                                                                      t
                                                                                                                              )
                                                                                                                      ),
                                                                                                          }
                                                                                                      ),
                                                                                                  ],
                                                                                          },
                                                                                          t
                                                                                      )
                                                                              )
                                                                            : e.jsx(j, {
                                                                                  color: 'gray.500',
                                                                                  children:
                                                                                      'Belum ada yang dipilih',
                                                                              }),
                                                                    }),
                                                                    e.jsx(E, {
                                                                        minW: '230px',
                                                                        _onSubmit: null,
                                                                        placeholder: 'Cari node',
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx(Y, {
                                                                selectedNodes: n,
                                                                onSelectChange: I,
                                                                apiURL: h,
                                                                companyData:
                                                                    s.type == 'company'
                                                                        ? s.companyData
                                                                        : void 0,
                                                            }),
                                                        ],
                                                    })
                                                  : e.jsxs(H, {
                                                        children: [
                                                            e.jsx(j, {
                                                                fontWeight: '600',
                                                                fontSize: 'lg',
                                                                children:
                                                                    'Node yang diikuti dibatasi maksimal 5 node,',
                                                            }),
                                                            e.jsx(j, {
                                                                children:
                                                                    'Hapus node yang lain terlebih dahulu untuk menambahkan',
                                                            }),
                                                        ],
                                                    }),
                                          })
                                        : e.jsx(M, { h: '300px', rounded: 'md' }),
                            }),
                            e.jsxs(G, {
                                children: [
                                    e.jsx(f, {
                                        colorScheme: 'gray',
                                        mr: 3,
                                        isDisabled: p,
                                        onClick: u,
                                        children: 'Batal',
                                    }),
                                    !!l &&
                                        e.jsx(f, {
                                            isLoading: p,
                                            colorScheme: 'blue',
                                            onClick: L,
                                            children: 'Tambahkan',
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(s) {
    const { selectedNodes: c, companyData: r, onSelectChange: m, apiURL: n } = s,
        { data: o } = C(n, z);
    return e.jsx(e.Fragment, {
        children: e.jsx(_, {
            companiesData: r ? [r] : [],
            marker: P(c, m),
            data: o ? o.result : [],
            as: o ? void 0 : M,
            centerAuto: !1,
        }),
    });
}
export { oe as A };
