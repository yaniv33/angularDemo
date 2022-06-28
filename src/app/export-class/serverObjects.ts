/* tslint:disable */
// Generated using typescript-generator version 2.12.476 on 2021-05-06 10:14:12.

export interface ManagerDashboard {
    monthlyProfitPrediction: number;
    openedServiceCalls: number;
    maxActivityTime: Calendar;
    dailyJoiners: number;
    dailyAbandons: number;
    totalIncomeToday: number;
    totalIncomeYesterDay: number;
    joinersGraph: { [index: string]: number };
    abandonsGraph: { [index: string]: number };
    coursesAndActivitiesJoiners: { [index: string]: number };
    incomeGraph: { [index: string]: number };
    outcomeGraph: { [index: string]: number };
    terminatedUsers: number[];
    aboutToExpiredUsers: number[];
    newUsers: number[];
    activeUsers: number[];
    entriesGraph: { [index: string]: Calendar[] };
    exitsGraph: { [index: string]: Calendar[] };
    averageAttendanceTimeInSeconds: { [index: string]: number };
    purchasedProducts: PurchasedItemDataUnion[];
    turnstileEntriesGraph: { [index: string]: Calendar[] };
    turnstileExitsGraph: { [index: string]: Calendar[] };
}

export interface LoginDetails {
    systemId: number;
    userName: string;
    password: string;
    versionNumber: string;
    ipAddress: string;
    macAddress: string;
    cpuId: string;
    mainDiskSerialNumber: string;
}

export interface SuccessullLoginInfo {
    authorizedUserId: number;
    user: BasicUserUnion;
    authorizationLevel: AuthorizationLevel;
    token: string;
}

export interface PushCommandObject extends Serializable {
    commandType: string;
    data: any;
}

export interface PushServerEventData {
    event: string;
    data: string;
}

export interface EntryTransactionList {
    transactionList: EntryTransaction[];
}

export interface TerminalsModelData {
    terminalsList: TerminalDetails[];
    terminalsOnlineList: number[];
}

export interface ProductUserMembership extends BasicProduct {
    periodType: PeriodType;
    periodAmount: number;
    entryHourId: number;
}

export interface ProductLimitedEntries extends ProductUserMembership {
    entriesAmount: number;
}

export interface ProductMifarePoints extends BasicProduct {
    mifarePoints: number;
}

export interface CoursePackage extends BasicProduct {
    courseId: number;
    registrationMethod: CourseRegistrationMethod;
    period: PeriodData;
    entriesAmount: number;
}

export interface GiftProduct extends BasicProduct {
}

export interface UsersModelData extends Serializable {
    parentAccountsMap: { [index: string]: ParentAccountDetails };
    usersMap: { [index: string]: EntranceUser };
    groupsMap: { [index: string]: AccountsRecord };
    realationsMap: { [index: string]: AccountsRecord };
    neighborhoodMap: { [index: string]: AccountsRecord };
    organizationsMap: { [index: string]: AccountsRecord };
    entryHoursDataMap: { [index: string]: EntryHoursData };
}

export interface UserAccountNotes {
    userAccountNotesMap: { [index: string]: CrmNote[] };
}

export interface AccountingInvoice extends AbstractAccountingDocument {
    purchasedProducts: PurchasedItemDataUnion[];
}

export interface EntryHoursDataMap {
    entryHoursDataMap: { [index: string]: EntryHoursData };
}

export interface SingleAccountData {
    parentAccountDetails: ParentAccountDetails;
    userAccountDetails: EntranceUser;
}

export interface EmployeeUpdateData {
    employee: Employee;
    authorizationData: AuthorizationDataUnion;
}

export interface CoursesModelData {
    coursesMap: { [index: string]: Course };
    coursesInstancesMap: { [index: string]: CourseInstance };
    hallsMap: { [index: string]: CourseHall };
    courseEntryHoursMap: { [index: string]: EntryHourRange[] };
    participantsMap: { [index: string]: CourseAttendancyInfo[] };
    courseInstanceAttendancesMap: { [index: string]: CourseInstanceAttendancyUnion[] };
}

export interface CourseInstanceAttendancy {
    id: number;
    userId: number;
    courseInstanceId: number;
    entriesAllowed: number;
    attendanceCount: number;
    deployedBy: number;
    updatedBy: number;
    createdOn: Calendar;
    registrationStatus: RegistrationStatus;
    type: string;
}

export interface AddNewCourseObject {
    course: Course;
    entryHoursList: EntryHourRange[];
}

export interface UpdateCourseObject {
    course: Course;
    entryHourRangesList: EntryHourRange[];
    courseParticipantsUpdateObject: CourseParticipantsUpdateObject;
}

export interface CourseDeploymentInfo {
    courseId: number;
    deploymentStartDate: Calendar;
    deploymentEndDate: Calendar;
    forceDeploymentMethod: boolean;
    deploymentMethod: ActionType;
}

export interface CourseDeploymentResult {
    status: number;
    conflictedInstanceByInstanceIdMap: { [index: string]: CourseInstance };
    conflictedDeploymentInfo: CourseDeploymentInfo;
    conflictedInstancesForHalls: CourseInstance[];
    conflictedInstancesForTutors: CourseInstance[];
}

export interface FullOrder {
    orderDetails: OrderDetails;
    purchasedItems: BasicProductUnion[];
    payments: AbstractPaymentUnion[];
}

export interface ZReportDetails {
    id: number;
    dateTimeStart: Calendar;
    dateTimeEnd: Calendar;
    totalCash: number;
    totalCredit: number;
    totalChecks: number;
    totalTransactions: number;
    totalItemsSold: number;
    adminId: number;
}

export interface BasicProduct {
    id: number;
    active: boolean;
    name: string;
    subTitle: string;
    description: string;
    price: number;
    picture: any;
    categoryId: number;
    groupIdOverride: number;
    usersTemplateId: number;
    externalAccountingNumber: number;
    note: string;
    type: string;
}

export interface ProductBarcodeTicket extends BasicProduct {
    entryHourId: number;
}

export interface Category {
    id: number;
    subCategories: number[];
    name: string;
    description: string;
    createdBy: number;
    createdOn: Calendar;
    externalId: string;
}

export interface DaoMsg {
    id: number;
    adminId: number;
    sourceUserId: number;
    destinationUserId: number;
    methodType: MessagingMethodType;
    messageType: MessageType;
    topic: string;
    content: string;
    attachment: any;
    attachmentName: string;
    destination: string;
    sent: boolean;
    timeToSend: Calendar;
    createdOn: Calendar;
    messageReadTime: Calendar;
}

export interface DirectDebitWithLimitedDetails {
    id: number;
    last4Digits: number;
    creditCardCompany: CreditCompanyType;
    amountToCharge: number;
    numOfPayments: number;
    userId: number;
}

export interface ControllerInfo extends ValidatorInfo {
    machines: MachineStatusInfo[];
}

export interface MachinePriceData {
    priceId: number;
    countDownTime: number;
    workingCountDownTime: number;
    machinePrice: number;
    cardPrice: number;
    workingMachinePrice: number;
    workingCardPrice: number;
    countDown: boolean;
    addingTime: boolean;
}

export interface MachineProgramData extends MachinePriceData {
    controllerId: number;
    machineId: number;
}

export interface MachineStatusInfo {
    controllerId: number;
    machineId: number;
    machineType: MachineType;
    timeLeft: number;
    lastUpdate: Calendar;
    friendlyName: string;
    online: boolean;
    working: boolean;
}

export interface RegisterToPaymentSystemData {
    personalData: PersonalData;
    password: string;
    creditCardPayment: CreditCardPaymentOld;
    directDebitPayment: DirectDebitWithLimitedDetails;
    productId: number;
    fingerPrint: string;
    idDevice: string;
}

export interface ChangePasswordData {
    systemId: number;
    userName: string;
    oldPassword: string;
    newPassword: string;
}

export interface ForgotPasswordData {
    systemId: number;
    messagingMethodType: MessagingMethodType;
    destination: string;
}

export interface ResetPasswordData {
    systemId: number;
    token: string;
    newPassword: string;
}

export interface SubUserValidationData {
    username: string;
    idDevice: string;
}

export interface TimeRange {
    from: Calendar;
    to: Calendar;
}

export interface UserPermissions {
    userId: number;
    allowedToPurchase: boolean;
    purchaseValidityEndDate: Calendar;
    allowedToUseCreditPoints: boolean;
    allowedToRegisterToFreeCourses: boolean;
    lastCourseBanDate: Calendar;
}

export interface CustomerSelfPurchaseData {
    products: number[];
    creditCardPayment: CreditCardPaymentOld;
}

export interface NewsData {
    id: number;
    title: string;
    content: string;
    createdBy: number;
    createdOn: Calendar;
}

export interface EventInstance {
    id: number;
    externalId: number;
    parentId: number;
    name: string;
    zoneIdsList: number[];
    maxCapacity: number;
    startDateTime: Calendar;
    gateOpeningDateTime: Calendar;
    gateClosingDateTime: Calendar;
    endDateTime: Calendar;
    zonePolicy: EventZonePolicy;
    eventTree: TreeNode<number>;
    groupIdsList: number[];
    enabledTerminalsList: number[];
    supplierIdsList: number[];
    note: string;
    lastUpdatedBy: number;
    lastUpdatedOn: Calendar;
    canceled: boolean;
    postEventActionsPerformed: boolean;
}

export interface EventZone {
    id: number;
    parentZoneId: number;
    defaultName: string;
    maxCapacity: number;
    zoneTree: TreeNode<number>;
    relatedTerminalIdsList: number[];
    note: string;
    latitude: number;
    longitude: number;
}

export interface EventZonePolicy {
    antiPassBackEnabled: boolean;
    reentryLimitEnabled: boolean;
    entryLimitEnabled: boolean;
}

export interface AccountingDocument {
    id: number;
    createdOn: Calendar;
    counter: number;
    documentType: AccountingDocumentType;
    paymentUserId: number;
    groupId: number;
    amountToCharge: number;
    sumPlus: number;
    sumMinus: number;
    numOfPayments: number;
    balance: number;
    vat: number;
    issue: string;
    addressTo: string;
    reference: number;
    note: string;
    createdBy: number;
    fromReceipt: number;
    closed: number;
    company: string;
    payUntil: string;
    cancelationTime: Calendar;
    exportNumber: number;
    tranasctionNumber: string;
    type: string;
}

export interface DBConditionsData {
    connditionsList: AbstractDBConditionUnion[];
    invertDBConditions: boolean;
}

export interface GuestInvitationData {
    personalData: PersonalData;
    entryData: EntryData;
    visitTimeRange: TimeRange;
}

export interface EventTicketProduct extends BasicProduct {
    eventId: number;
    periodData: PeriodData;
    entryHoursId: number;
}

export interface SelfPurchaseTransaction extends AbstractTransaction {
    creditCardPayments: CreditCardPaymentOld[];
    purchasedProducts: PurchasedItemDataUnion[];
    coupons: CouponObject[];
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    productIdToNamesMap: { [index: string]: PersonalData[] };
}

export interface ProductEditData {
    product: BasicProductUnion;
    dbConditionsData: DBConditionsData;
    storeIdsSet: number[];
}

export interface RefundRequestData {
    id: number;
    accountingDocument: AccountingDocumentUnion;
    dateTime: Calendar;
    status: RefundRequestStatus;
}

export interface DiscountData {
    relatedProductIdList: number[];
    id: number;
    title: string;
    type: DiscountType;
    value: number;
    note: string;
    active: boolean;
    createdBy: number;
    createdOn: Calendar;
    price: number;
    amount: number;
    priceTotal: number;
}

export interface PurchasedEventBarcodeTicket extends PurchasedItemData {
    instanceId: number;
    originalEventStartTime: Calendar;
    originalEventEndTime: Calendar;
    entryHoursId: number;
    generatedBarcodeTicketsIds: number[];
}

export interface CouponItemData {
    id: number;
    couponCode: string;
    validFrom: Calendar;
    validTo: Calendar;
    benefitId: number;
    usageCounter: number;
    maxUsage: number;
    companyId: number;
    availableFromItemAmount: number;
    createdBy: number;
    createdOn: Calendar;
    usageWorth: number;
    allowDoublePromotion: boolean;
    type: string;
}

export interface Calendar extends Serializable, Cloneable, Comparable<Calendar> {
}

export interface PurchasedItemData {
    id: number;
    name: string;
    productId: number;
    pricePerUnit: number;
    unitsAmount: number;
    benefitId: number;
    pricePaid: number;
    timeOfPurchase: Calendar;
    couponData: CouponObject;
    userId: number;
    accountId: number;
    terminalId: number;
    adminId: number;
    canceled: boolean;
    returned: boolean;
    appliedOnUser: boolean;
    documentId: number;
    type: string;
}

export interface BasicUser {
    type: "com.otot.common.data.dataObjects.EntranceUser" | "com.otot.common.data.dataObjects.smartClub.Employee" | "com.otot.common.data.dataObjects.ImportEmployee" | "com.otot.common.data.dataObjects.ImportEntranceUser" | "com.otot.common.PaymentUser" | "com.otot.common.data.dataObjects.smartClub.accounts.ParentAccountDetails" | "com.otot.common.data.dataObjects.ImportParentAccount";
    personalData: PersonalData;
}

export interface Serializable {
}

export interface EntryTransaction extends AbstractTransaction {
    direction: DirectionType;
    usedDevice: IDDeviceTypes;
    deviceId: number;
    userId: number;
    terminalId: number;
    customerType: number;
    entryHoursId: number;
    deviceValue: string;
    cashLeft: number;
    cashPaymentDetails: CashPaymentDetails;
    mifareCardDetails: MifareCardDetails;
}

export interface TerminalDetails {
    terminalId: number;
    systemId: number;
    terminalType: TerminalType;
    description: string;
    firmwareVersion: number;
    gpcName: string;
    gpcVersion: number;
    androidName: string;
    androidVersion: number;
    externalIpAddress: string;
    terminalIpAddress: string;
    terminalGatewayAddress: string;
    gateOpened: boolean;
    systemName: string;
    checkMedicalCertificate: boolean;
    currentDateTime: Calendar;
    timeZone: TimeZone;
    macaddress: any;
}

export interface PeriodData {
    periodType: PeriodType;
    amount: number;
}

export interface ParentAccountDetails extends PaymentUser, Serializable {
    userAccountsIdSet: number[];
}

export interface EntranceUser extends BasicUser, Serializable {
    type: "com.otot.common.data.dataObjects.EntranceUser" | "com.otot.common.data.dataObjects.smartClub.Employee" | "com.otot.common.data.dataObjects.ImportEmployee" | "com.otot.common.data.dataObjects.ImportEntranceUser";
    entryData: EntryData[];
    mifareCards: { [index: string]: MifareCardDetails };
}

export interface AccountsRecord extends BasicRecord, Serializable {
    recordType: AccountsRecordType;
}

export interface EntryHoursData {
    tableId: number;
    title: string;
    lastUpdated: Calendar;
    createdOn: Calendar;
    entryHoursDetailsList: EntryPackageHourRange[];
    createdBy: number;
    erasedBy: number;
    active: boolean;
}

export interface CrmNote {
    id: number;
    parentAccountId: number;
    userId: number;
    noteType: number;
    note: string;
    lastUpdated: Calendar;
    updatedBy: number;
}

export interface AbstractAccountingDocument {
    id: number;
    documentNumber: number;
    parentAccountId: number;
    subject: string;
    documentOwnerName: string;
    relatedDocumentsIds: number[];
    note: string;
    createdOn: Calendar;
    createdBy: number;
    type: string;
}

export interface Employee extends EntranceUser {
    type: "com.otot.common.data.dataObjects.smartClub.Employee" | "com.otot.common.data.dataObjects.ImportEmployee";
    authorizationLevel: AuthorizationLevel;
}

export interface AuthorizationData {
    authorizationLevel: AuthorizationLevel;
    userName: string;
    password: string;
    active: boolean;
    type: string;
}

export interface Course {
    id: number;
    name: string;
    defaultTutorId: number;
    defaultTutorCommision: number;
    defaultTutorPricePerInstance: number;
    defaultHallId: number;
    defaultMaxParticipants: number;
    note: string;
    active: boolean;
    startDate: Calendar;
    endDate: Calendar;
    socialGroupId: number;
    picture: any;
    courseType: CourseType;
    linkedGroups: number[];
    defaultPricePerInstance: number;
}

export interface CourseInstance {
    id: number;
    courseId: number;
    hallId: number;
    tutorCommision: number;
    tutorPricePerInstance: number;
    maxParticipants: number;
    numOfParticipants: number;
    startDate: Calendar;
    endDate: Calendar;
    note: string;
    tutorId: number;
}

export interface CourseHall {
    tableId: number;
    title: string;
    parentHallId: number;
    relatedTerminals: number[];
}

export interface EntryHourRange extends HourRange {
    type: "com.otot.common.data.dataObjects.smartClub.entryHours.EntryHourRange" | "com.otot.common.data.dataObjects.smartClub.entryHours.EntryPackageHourRange" | "com.otot.common.data.dataObjects.smartClub.entryHours.PeriodicallyEntryHourRange";
    daysMask: number;
}

export interface CourseAttendancyInfo {
    tableId: number;
    userId: number;
    courseId: number;
    price: number;
    startDate: Calendar;
    endDate: Calendar;
    entriesLeft: number;
    packageId: number;
    lastEntriesReset: Calendar;
    note: string;
    createdBy: number;
}

export interface CourseInstanceAttendancyForExerciseGroup extends CourseInstanceAttendancy {
    exerciseProgramId: number;
}

export interface CourseParticipantsUpdateObject {
    courseId: number;
    particiapntsToRegisterSet: CourseAttendancyInfo[];
    particiapntsToUpdateSet: CourseAttendancyInfo[];
    participantToRemoveSet: CourseAttendancyInfo[];
}

export interface OrderDetails {
    id: number;
    name: string;
    description: string;
    dateTimeOfCreation: Calendar;
    lastUpdated: Calendar;
    destinationUserId: number;
    payingUserId: number;
    adminId: number;
    orderStatus: OrderStatus;
}

export interface AbstractPayment {
    id: number;
    sum: number;
    payingCustomerId: number;
    createdBy: number;
    createdOn: Calendar;
    type: string;
}

export interface ValidatorInfo {
    id: number;
    terminalType: number;
    friendlyName: string;
    revision: number;
    online: boolean;
    type: string;
}

export interface PersonalData extends Serializable {
    id: number;
    firstName: string;
    lastName: string;
    passport: string;
    tel: string;
    pel: string;
    email: string;
    city: string;
    smsPermited: boolean;
    emailPermited: boolean;
    address: string;
    zipCode: string;
    picture: any;
    neighborhoodId: number;
    groupId: number;
    gender: number;
    relationId: number;
    birthDayDate: Calendar;
    accountType: UserAccountTypes;
    createdBy: number;
    createdOn: Calendar;
}

export interface CreditCardPaymentOld {
    systemId: number;
    cardHolderName: string;
    personalId: string;
    cardNumber: string;
    creditCompany: CreditCompanyType;
    expirationMonth: number;
    expirationYear: number;
    cardCCV: string;
    amountToCharge: number;
    id: number;
    invoice: string;
    numOfPayments: number;
    firstCharge: number;
    paymentDate: Calendar;
    emvPayment: boolean;
}

export interface TreeNode<T> {
    key: T;
    children: TreeNode<T>[];
}

export interface NewAccountingDocument extends AccountingDocument {
    documentFile: any;
}

export interface AbstractDBCondition {
    mathCondition: ConditionType;
    fieldData: IDBFieldTypesUnion;
    condition: string;
    type: string;
}

export interface EntryData extends IEntryValidationDetails, Serializable {
    id: number;
    idDevices: IDDevices;
    reentryTime: number;
    validityDateStart: Calendar;
    validityDateEnd: Calendar;
    healthDeclarationDate: Calendar;
    regulationsFormSignDate: Calendar;
    active: boolean;
    popupNotificationMessage: string;
    notificationForTerminal: string;
    entryDataPlans: EntryDataPlans;
    entriesLeft: number;
    userId: number;
}

export interface CouponObject {
    couponCode: string;
    couponCompanyId: number;
}

export interface AbstractTransaction {
    id: number;
    status: number;
    transactionTime: Calendar;
    transactionNumber: string;
    depletionNumber: number;
    note: string;
    type: string;
}

export interface GenerateCouponsData extends CouponItemData {
    amountToGenerate: number;
}

export interface Cloneable {
}

export interface PurchasedMembership extends PurchasedItemData {
    entryHourId: number;
    dateStart: Calendar;
    dateEnd: Calendar;
}

export interface PurchasedLimitedEntries extends PurchasedMembership {
    entriesAmount: number;
}

export interface PurchasedCoursePackage extends PurchasedItemData {
    startDate: Calendar;
    endDate: Calendar;
    courseId: number;
    registrationMethod: CourseRegistrationMethod;
    entries: number;
}

export interface PurchasedMifarePoints extends PurchasedItemData {
    mifarePoints: number;
}

export interface ImportEntranceUser extends EntranceUser {
    externalId: string;
}

export interface PaymentUser extends BasicUser {
    paymentData: UserPaymentData;
}

export interface ImportParentAccount extends ParentAccountDetails {
    externalId: string;
}

export interface ImportEmployee extends Employee {
    type: "com.otot.common.data.dataObjects.ImportEmployee";
    externalId: string;
}

export interface CashPaymentDetails {
    cashPaid: number;
    cashReturned: number;
    coinsUsed: CashPaymentOld[];
    billsUsed: CashPaymentOld[];
    id: number;
}

export interface MifareCardDetails extends Serializable {
    id: number;
    uidLength: number;
    ototSignature: string;
    type: number;
    subtype: number;
    type2: number;
    ototSerial: number;
    systemId: number;
    customerType: number;
    applicationNumber: number;
    seasonNumber: number;
    gate: number;
    transactionNumber: number;
    normalValue: number;
    eventNumber: number;
    lastValid: Calendar;
    entryLimit: number;
    entryCounter: number;
    extraMonthEntryLimit: number;
    extraMonthEntryCounter: number;
    lastUseDate: Calendar;
    terminalAddress: number;
    discountCents: number;
    discountPercents: number;
    startDate: Calendar;
    reentryTime: Calendar;
    extraEntriesFriday: number;
    entryStartTime: Calendar;
    entryEndTime: Calendar;
    fridayEntryStartTime: Calendar;
    fridayEntryEndTime: Calendar;
    uniqueCard: number;
}

export interface TimeZone extends Serializable, Cloneable {
}

export interface UserPaymentData {
    company: string;
    ballance: number;
    branchId: number;
}

export interface BasicRecord {
    id: number;
    title: string;
    note: string;
    createdBy: number;
    userType: UserAccountTypes;
    createdOn: Calendar;
    active: boolean;
    type: string;
}

export interface EntryPackageHourRange extends EntryHourRange {
    type: "com.otot.common.data.dataObjects.smartClub.entryHours.EntryPackageHourRange";
    terminalIds: number[];
}

export interface AccountingReceipt extends AbstractAccountingDocument {
    payments: AbstractPaymentUnion[];
    totalPaymentsSum: number;
}

export interface AccountingInvoiceReceipt extends AbstractAccountingDocument {
    payments: AbstractPaymentUnion[];
    purchasedProducts: PurchasedItemDataUnion[];
}

export interface AccountingInvoiceRefund extends AccountingInvoice {
}

export interface AccountingReceiptRefund extends AccountingReceipt {
}

export interface UpdateWebAccountDataByManager extends AuthorizationData {
    userId: number;
    userNameField: PersonalDataFields;
}

export interface HourRange {
    type: "com.otot.common.data.dataObjects.smartClub.entryHours.EntryHourRange" | "com.otot.common.data.dataObjects.smartClub.entryHours.EntryPackageHourRange" | "com.otot.common.data.dataObjects.smartClub.entryHours.PeriodicallyEntryHourRange";
    tableId: number;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
}

export interface CashPayment extends AbstractPayment {
    cashReturned: number;
    coinsUsed: CashPayment[];
    billsUsed: CashPayment[];
}

export interface CheckPayment extends AbstractPayment {
    bankType: BankType;
    bankAccountNumber: number;
    bankBranch: number;
    checkNumber: number;
    paymentDate: Calendar;
    delayedCheck: boolean;
}

export interface CreditCardPayment extends AbstractPayment {
    cardHolderName: string;
    payingCustomerPassport: string;
    cardNumber: string;
    expirationMonth: number;
    expirationYear: number;
    cardCCV: string;
    invoice: string;
    numOfPayments: number;
    firstChargeSum: number;
    paymentDate: Calendar;
    creditCompany: CreditCompanyType;
    chargedExternally: boolean;
}

export interface GeneralPayment extends AbstractPayment {
    paymentType: PaymentType;
}

export interface VoucherPayment extends AbstractPayment {
    serialNumber: string;
    systemId: number;
}

export interface IDBFieldTypes {
    type: string;
    fieldNameAsString: string;
    function: boolean;
    tableName: string;
    aliasName: string;
}

export interface DBMathCondition extends AbstractDBCondition {
    values: number[];
}

export interface DBTimeCondition extends AbstractDBCondition {
    values: Calendar[];
    relativeTimeEnabled: boolean;
}

export interface DBRelativeTimeCondition extends AbstractDBCondition {
    relativeTime: Calendar;
    startPeriod: PeriodData;
    endPeriod: PeriodData;
}

export interface DBStringCondition extends AbstractDBCondition {
    values: string[];
}

export interface IDDevices extends Serializable {
    emCardsList: EmCardData[];
    fingerprintsList: FingerprintData[];
    mifareCardsMap: { [index: string]: MifareCardDetails };
}

export interface IEntryValidationDetails {
    valid: boolean;
    entryHoursId: number;
    validityStartDate: Calendar;
    validityEndDate: Calendar;
    medicalCertificateDate: Calendar;
    freezeStartDate: Calendar;
    reentryTimeLimit: Calendar;
    freezeEndDate: Calendar;
    lastEntryTime: Calendar;
}

export interface PaymentTransaction extends AbstractTransaction {
    systemId: number;
    terminalId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    streetAddress: string;
    streetNumber: string;
    city: string;
    state: string;
    country: string;
    amountToCharge: number;
    transactionId: string;
    timeOfCreation: Calendar;
    timeOfApproval: Calendar;
    transactionApprovalCode: string;
    transactionStatus: number;
    token: string;
    productsOrdered: PurchasedItemDataUnion[];
    creditCardPayments: CreditCardPaymentOld[];
    cashPayment: CashPaymentDetails;
    checkPayments: CheckPayment[];
    voucherPayments: VoucherPayment[];
    mifareCardPayment: MifareCardPayment;
    generalPayments: GeneralPayment[];
    directDebitPayments: DirectUserDebit[];
    creditPointsPayments: CreditPointsPayment[];
    emvPayments: CreditCardResultBuilder[];
    paymentsArray: AbstractPaymentUnion[];
    paymentUserId: number;
    coupons: CouponObject[];
}

export interface AccountingTransaction extends PaymentTransaction {
    documentType: AccountingDocumentType;
    counter: number;
    issue: string;
    reference: number;
    company: string;
    payUntil: string;
    relatedDocumentIds: number[];
    exportNumber: number;
    subDocuments: AccountingDocumentUnion[];
    incrementServerCounter: boolean;
}

export interface ThermalEntryTransaction extends EntryTransaction {
    picture: any;
    temp: number;
}

export interface Comparable<T> {
}

export interface CashPaymentOld {
    value: number;
    amountUsed: number;
}

export interface CrmLeadRecord extends BasicRecord {
    recordType: CrmRecordType;
}

export interface PeriodicallyEntryHourRange extends EntryHourRange {
    type: "com.otot.common.data.dataObjects.smartClub.entryHours.PeriodicallyEntryHourRange";
    periodData: PeriodData;
}

export interface EmCardData extends Serializable {
    cardNumber: string;
}

export interface FingerprintData extends Serializable {
    templateData: any;
    enrollmentQuality: number;
}

export interface MifareCardPayment {
    mifareCardDetails: MifareCardDetails;
    amountToCharge: number;
}

export interface DirectUserDebit {
    tokenId: number;
    userId: number;
    amountToCharge: number;
    lastDigits: number;
    startDate: Calendar;
    transactionId: number;
    numOfPayments: number;
    firstCharge: number;
}

export interface CreditPointsPayment {
    userId: number;
    amountToCharge: number;
}

export interface CreditCardResultBuilder {
    valid: boolean;
    status: number;
    cardNum4Digit: string;
    amountPaid: number;
    creditCompany: CreditCompanyType;
    transactionNumber: string;
    voucherNumber: string;
    token: string;
    cardNumber: string;
    expirationDate: string;
    creditType: CreditType;
    paramX: string;
    numOfPayments: number;
    firstCharge: number;
    vuid: number;
    transType: CreditTransactionType;
}

export type CourseInstanceAttendancyUnion = CourseInstanceAttendancyForExerciseGroup | CourseInstanceAttendancy;

export type BasicProductUnion = ProductLimitedEntries | GiftProduct | ProductUserMembership | ProductBarcodeTicket | ProductMifarePoints | CoursePackage | EventTicketProduct;

export type AccountingDocumentUnion = NewAccountingDocument;

export type CouponItemDataUnion = GenerateCouponsData;

export type PurchasedItemDataUnion = PurchasedMembership | PurchasedLimitedEntries | PurchasedCoursePackage | PurchasedEventBarcodeTicket | PurchasedMifarePoints;

export type BasicUserUnion = EntranceUser | ImportEntranceUser | PaymentUser | ParentAccountDetails | ImportParentAccount | Employee | ImportEmployee;

export type AbstractAccountingDocumentUnion = AccountingInvoice | AccountingReceipt | AccountingInvoiceReceipt | AccountingInvoiceRefund | AccountingReceiptRefund;

export type AuthorizationDataUnion = UpdateWebAccountDataByManager | AuthorizationData;

export type AbstractPaymentUnion = CashPayment | CheckPayment | CreditCardPayment | GeneralPayment | VoucherPayment;

export type ValidatorInfoUnion = ControllerInfo;

export type AbstractDBConditionUnion = DBMathCondition | DBTimeCondition | DBRelativeTimeCondition | DBStringCondition;

export type AbstractTransactionUnion = EntryTransaction | PaymentTransaction | AccountingTransaction | ThermalEntryTransaction | SelfPurchaseTransaction;

export type BasicRecordUnion = AccountsRecord | CrmLeadRecord;

export type HourRangeUnion = HourRange | EntryHourRange | PeriodicallyEntryHourRange;

export type IDBFieldTypesUnion = UserAccountFieldNames | PersonalDataFieldNames | ParentAccountFieldNames | UsersActionLogFieldNames | VouchersFieldNames | LeadFieldNames | EntriesFieldNames | CourseInstancesFieldNames | CourseRegularAttendancesFieldNames | CourseInstanceAttendancesFieldNames | DocumentFieldNames | EntryDataFieldNames;

export enum SmartClubClientType {
    SMART_CLUB_MANY_USERS,
    SMART_CLUB_ONE_USER,
    SMART_CLUB_FESTIVAL,
    SMART_CLUB_RESTAURANT,
    SMART_CLUB_GARAGE,
}

export enum CreditCompanyType {
    UNKNOWN,
    ISRACARD,
    VISA,
    DINERS,
    AMERICAN_EXPRESS,
    JCB,
    LEUMI,
    DISCOVER,
    MASTERCARD,
}

export enum AuthorizationLevel {
    UNAUTHORIZED,
    CUSTOMER,
    VIEWER,
    TUTOR,
    SECRATERY,
    MANAGER,
    ADMIN,
}

export enum PeriodType {
    HOUR,
    DAY,
    WEEK,
    MONTH,
    MINUTE,
}

export enum CourseRegistrationMethod {
    MANUAL_REGISTRATION_BY_USER_PURCHASED_POINTS,
    AUTO_REGISTRATION_FOR_DATE_RANGE,
    BY_USER_RESET_WEEKLY_SUNDAY,
    BY_USER_RESET_MONTHLY_1st,
}

export enum RegistrationStatus {
    REGISTERED,
    WAITING,
    BANNED,
    MISSED,
}

export enum ActionType {
    ADD,
    REMOVE,
    UPDATE,
    EDIT,
}

export enum MessagingMethodType {
    SMS,
    EMAIL,
    PUSH_NOTIFICATION,
}

export enum MessageType {
    REGULAR,
    REMINDER,
    SENT_FOR_PARENT,
}

export enum MachineType {
    WASHER,
    DRYER,
    STACK,
}

export enum AccountingDocumentType {
    INVOICE,
    RECEIPT,
    INVOICE_AND_RECEIPT,
    NON_PROFIT_ORGANIZATION_INVOICE,
    NON_PROFIT_ORGANIZATION_REFUND_INVOICE,
    NON_PROFIT_ORGANIZATION_CHARGE_RECEIPT,
    REFUND_INVOICE,
    REFUND_RECEIPT,
    REFUND_INVOICE_RECEIPT,
    NON_PROFIT_ORGANIZATION_REFUND_INVOICE_RECEIPT,
    Z_REPORT,
    RECEIPT_BEFORE_INVOICE,
    TOTALS,
    EXTERNAL_CREDIT,
}

export enum RefundRequestStatus {
    WAITING,
    ACCEPTED,
    DECLINED,
}

export enum DiscountType {
    DISCOUNT_SUM,
    DISCOUNT_PERCENT,
    SURCHARGE_SUM,
    SURCHARGE_PERCENT,
    MIFARE_PAYMENT,
}

export enum DirectionType {
    IN,
    OUT,
    PASSAGE,
}

export enum IDDeviceTypes {
    CASH,
    MIFARE_CARD,
    MIFARE_CASH_CARD,
    EM_CARD,
    BARCODE,
    FINGER_PRINT,
    MAGNETIC_CARD,
    CREDIT_CARD,
}

export enum TerminalType {
    MAIN_ENTRANCE,
    GYM_ENTRANCE,
    POOL_ENTRANCE,
    COURSE_ENTRANCE,
    BOOKING_ENTRANCE,
    PRODUCT_SELLING,
    CARD_CHARGING_SYSTEM,
    LAUNDRY_CONTROLLER,
}

export enum UserAccountTypes {
    PARENT_ACCOUNT,
    USER_ACCOUNT,
    MANAGER,
    TUTOR,
    SECRATERY,
    LEAD,
    GENERAL_WORKER,
    SUPPLIER,
}

export enum AccountsRecordType {
    GROUPS,
    NEIGHBORHOOD,
    RELATIONS,
    ORGANIZATIONS,
}

export enum CourseType {
    REGULAR,
    GYM_EXERCISE_GROUP,
}

export enum OrderStatus {
    OPENED,
    PRODUCT_SELECTED,
    PAID_BY_CUSTOMER,
    IN_PREPARATION,
    ON_THE_WAY,
    RECEIVED_BY_CUSTOMER,
    CLOSED,
}

export enum ConditionType {
    LARGER,
    SMALLER,
    EQUALS,
    NOT_EQUALS,
    BETWEEN,
    NOT_BETWEEN,
    IN,
    NOT_IN,
    LIKE,
    NOT_LIKE,
}

export enum EntryDataPlans {
    MEMBER,
    LIMITED_ENTRIES,
    COURSE_MEMBER,
}

export enum PersonalDataFields {
    FIRST_NAME,
    LAST_NAME,
    PASSPORT,
    TELEPHONE,
    MOBILE,
    EMAIL,
    CITY,
    ADDRESS,
    ZIP_CODE,
    PICTURE,
    NEIGHBORHOOD,
    GROUP,
    GENDER,
    RELATION,
    BIRTHDAY_DATE,
}

export enum BankType {
    EURO_TADE,
    YAHAV,
    PITUACH_HATASIA,
    SAPANUT_LEISRAEL,
    BANK_HADOAR,
    LEEUMI,
    DISCONT,
    HAPOALIM,
    EIGUD,
    HOTZAR_HACHAYAL,
    MARCANTIL,
    HAKLAHUT_LEISREAL,
    TFACHOT,
    CITY,
    HSBC,
    BNP_PARIBAS,
    UBANK,
    BEINLEUMI,
    ARABY_ISRAELI,
    MASAD,
    OVED_LEUMI,
    POHALEY_AGUDAT_ISREAL,
    JERUSALEM,
    ARAB_LAND_BANK,
    OTZAR_HASHILTON_HAMEKOMI,
    DISCOUNT_LEMASHKANTAHOT,
}

export enum PaymentType {
    CASH,
    CHECK_MONEY,
    CHECK_POSTDATED,
    CREDIT,
    SALARY,
    BANK_TRANSFER,
    VOUCHER,
    DIRECT_DEBIT,
    ALLOWANCE,
    VISA,
    ISRACARD,
    RFID_CREDIT,
    CREDIT_EMV_PAYMENT,
    REFUND_CASH,
    REFUND_CHECK_MONEY,
    REFUND_CREDIT_CARD,
    REFUND_SALARY,
    REFUND_BANK_TRANSFER,
    REFUND_VOUCHER,
    REFUND_DIRECT_DEBIT,
    REFUND_CHECK_POSTDATED,
    REFUND_ALLOWANCE,
    REFUND_CREDIT_CARD_EMV,
}

export enum UserAccountFieldNames {
}

export enum PersonalDataFieldNames {
}

export enum ParentAccountFieldNames {
}

export enum UsersActionLogFieldNames {
}

export enum VouchersFieldNames {
}

export enum LeadFieldNames {
}

export enum EntriesFieldNames {
}

export enum CourseInstancesFieldNames {
}

export enum CourseRegularAttendancesFieldNames {
}

export enum CourseInstanceAttendancesFieldNames {
}

export enum DocumentFieldNames {
}

export enum EntryDataFieldNames {
}

export enum CrmRecordType {
    TOPIC,
    STATUS,
    REFERENCE,
}

export enum CreditType {
    UNKNOWN,
    REGULAR,
    ISRA_CREDIT,
    IMMEDIATE_CHARGE,
    CLUB_CHARGE,
    SUPER_CREDIT,
    CREDIT,
    PAYMENTS,
    CLUB_CHARGE_PAYMENTS,
}

export enum CreditTransactionType {
    BLOCKED,
    REGULAR,
    REGULAR_APPROVED,
    FORCED,
    CASH_BACK,
    CASH,
    BALANCE,
    APPROVED_CANCELLATION,
    APPROVED_REFUND,
    REFUND,
    UNKNOWN,
}
