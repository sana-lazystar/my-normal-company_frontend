import { create } from 'zustand';

import {
  ProductDetail,
  ProductDetailProps,
  ProductListWithSeller,
  ProductListWithSellerProps,
} from '@/pages';

/** NOTE: Mobile에서 Stack형태의 페이지 처리를 원할 경우, 아래 MOBILE_STACKS에 페이지 컴포넌트를 추가하면 됩니다. */
export const REGISTERED_MOBILE_STACKS = {
  ProductListWithSeller: {
    component: ProductListWithSeller,
    propTypes: {} as ProductListWithSellerProps,
  },
  ProductDetail: {
    component: ProductDetail,
    propTypes: {} as ProductDetailProps,
  },
} as const;

export type MobileStackName = keyof typeof REGISTERED_MOBILE_STACKS;

type MobileStackComponentProps<TMobileStackName extends MobileStackName> =
  (typeof REGISTERED_MOBILE_STACKS)[TMobileStackName]['propTypes'];

type MobileStackHistory<TMobileStackName extends MobileStackName = MobileStackName> = {
  name: TMobileStackName;
  propTypes: MobileStackComponentProps<TMobileStackName>;
};

type MobileStackStoreState = {
  mobileStackHistories: MobileStackHistory[];
};

interface MobileStackStoreActions {
  /** INFO: 같은 페이지가 히스토리에 존재할 경우와, 그렇지 않을경우로 나뉘어 동작합니다. */
  open: <TMobileStackName extends MobileStackName>(
    name: TMobileStackName,
    componentProps: MobileStackComponentProps<TMobileStackName>
  ) => void;
  /** INFO: history에 저장된 Mobile Stack에서 제일 마지막의 Stack을 제거합니다.  */
  pop: () => void;
}

type MobileStackStore = MobileStackStoreState & MobileStackStoreActions;

const DEFAULT_MOBILE_STACK_STORE_STATE: MobileStackStoreState = {
  mobileStackHistories: [],
};

export const useMobileStackStore = create<MobileStackStore>((set, get) => ({
  ...DEFAULT_MOBILE_STACK_STORE_STATE,
  open: (name, propTypes) => {
    const { mobileStackHistories } = get();

    const sameHistoryIndex = mobileStackHistories.findIndex(
      mobileStackHistory => mobileStackHistory.name === name
    );

    // NOTE: 같은 페이지가 이미 히스토리 스택에 존재할 경우, 같은 페이지와 해당 페이지 사이에 존재하는 페이지들을 모두 제거하고 해당 페이지를 마지막으로 추가합니다.
    if (sameHistoryIndex >= 0) {
      set(prev => ({
        ...prev,
        mobileStackHistories: [
          ...prev.mobileStackHistories.slice(0, sameHistoryIndex),
          { name, propTypes },
        ],
      }));

      return;
    }

    set(prev => ({
      ...prev,
      mobileStackHistories: [...prev.mobileStackHistories, { name, propTypes }],
    }));
  },
  pop: () => {
    const { mobileStackHistories } = get();

    if (mobileStackHistories.length === 0) return;

    set(prev => ({
      ...prev,
      mobileStackHistories: prev.mobileStackHistories.slice(0, -1),
    }));
  },
}));
