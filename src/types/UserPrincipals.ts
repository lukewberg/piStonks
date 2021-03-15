export interface StreamerInfo {
    streamerBinaryUrl: string;
    streamerSocketUrl: string;
    token: string;
    tokenTimestamp: string;
    userGroup: string;
    accessLevel: string;
    acl: string;
    appId: string;
}

export interface Quotes {
    isNyseDelayed: boolean;
    isNasdaqDelayed: boolean;
    isOpraDelayed: boolean;
    isAmexDelayed: boolean;
    isCmeDelayed: boolean;
    isIceDelayed: boolean;
    isForexDelayed: boolean;
}

export interface Key {
    key: string;
}

export interface StreamerSubscriptionKeys {
    keys: Key[];
}

export interface Preferences {
    expressTrading: boolean;
    directOptionsRouting: boolean;
    directEquityRouting: boolean;
    defaultEquityOrderLegInstruction: string;
    defaultEquityOrderType: string;
    defaultEquityOrderPriceLinkType: string;
    defaultEquityOrderDuration: string;
    defaultEquityOrderMarketSession: string;
    defaultEquityQuantity: number;
    mutualFundTaxLotMethod: string;
    optionTaxLotMethod: string;
    equityTaxLotMethod: string;
    defaultAdvancedToolLaunch: string;
    authTokenTimeout: string;
}

export interface Authorizations {
    apex: boolean;
    levelTwoQuotes: boolean;
    stockTrading: boolean;
    marginTrading: boolean;
    streamingNews: boolean;
    optionTradingLevel: string;
    streamerAccess: boolean;
    advancedMargin: boolean;
    scottradeAccount: boolean;
}

export interface Account {
    accountId: string;
    description: string;
    displayName: string;
    accountCdDomainId: string;
    company: string;
    segment: string;
    surrogateIds: string;
    preferences: Preferences;
    acl: string;
    authorizations: Authorizations;
}

export interface UserPrincipals {
    authToken: string;
    userId: string;
    userCdDomainId: string;
    primaryAccountId: string;
    lastLoginTime: string;
    tokenExpirationTime: string;
    loginTime: string;
    accessLevel: string;
    stalePassword: boolean;
    streamerInfo: StreamerInfo;
    professionalStatus: string;
    quotes: Quotes;
    streamerSubscriptionKeys: StreamerSubscriptionKeys;
    accounts: Account[];
}
