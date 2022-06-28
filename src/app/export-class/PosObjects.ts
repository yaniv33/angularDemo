/* tslint:disable */
// Generated using typescript-generator version 2.12.476 on 2019-07-17 14:31:01.

export interface Item {
  name: string;
  quantity: number;
  stock_id: number;
  product_id: number;
  discount: number;
  unit_price: number;
  stock_adjust: boolean;

  // stock: Stock;
  // taxes: ItemTax[];
}

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
    entriesGraph: { [index: string]: Calendar[] };
    exitsGraph: { [index: string]: Calendar[] };
    averageAttendanceTimeInSeconds: { [index: string]: number };
    purchasedProducts: { [index: string]: PurchasedItemData[] };
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

export interface EventData {
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
    parentAccountsList: ParentAccountDetails[];
    usersList: EntranceUser[];
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
    purchasedProducts: BasicProductUnion[];
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
    attendant: boolean;
    deployedBy: number;
    updatedBy: number;
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
    description: string;
    price: number;
    picture: any;
    categoryId: number;
    benefitId: number;
    userId: number;
    discount: number;
    applyProductSettings: boolean;
    type: string;
}

export interface ProductBarcodeTicket extends BasicProduct {
}

export interface Category {
    id: number;
    subCategories: number[];
    name: string;
    description: string;
    createdBy: number;
    createdOn: Calendar;
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
}

export interface DirectDebitWithLimitedDetails {
    id: number;
    last4Digits: number;
    creditCardCompany: CreditCompanyType;
    amountToCharge: number;
    numOfPayments: number;
    userId: number;
}

export interface Calendar extends Serializable, Cloneable, Comparable<Calendar> {
}

export interface PurchasedItemData {
    tableId: number;
    name: string;
    priceId: number;
    benefitId: number;
    dateStart: Calendar;
    dateEnd: Calendar;
    originalPrice: number;
    pricePaid: number;
    unitsAmount: number;
    pricePerUnit: number;
    userId: number;
    accountId: number;
    documentId: number;
    timeOfPurchase: Calendar;
    adminId: number;
    appliedOnUser: boolean;
    canceled: boolean;
    returned: boolean;
}

export interface BasicUser {
    type: "com.otot.common.data.dataObjects.EntranceUser" | "com.otot.common.data.dataObjects.smartClub.Employee" | "com.otot.common.PaymentUser" | "com.otot.common.data.dataObjects.smartClub.accounts.ParentAccountDetails";
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
    type: "com.otot.common.data.dataObjects.smartClub.accounts.ParentAccountDetails";
    userAccountsIdSet: number[];
}

export interface EntranceUser extends BasicUser, Serializable {
    type: "com.otot.common.data.dataObjects.EntranceUser" | "com.otot.common.data.dataObjects.smartClub.Employee";
    entryData: EntryData;
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
    type: "com.otot.common.data.dataObjects.smartClub.Employee";
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
    defaultPricePerInstance: number;
    defaultMaxParticipants: number;
    note: string;
    active: boolean;
    startDate: Calendar;
    endDate: Calendar;
    socialGroupId: number;
    picture: any;
    courseType: CourseType;
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
}

export interface EntryHourRange extends HourRange {
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

export interface Cloneable {
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

export interface PaymentUser extends BasicUser {
    type: "com.otot.common.PaymentUser" | "com.otot.common.data.dataObjects.smartClub.accounts.ParentAccountDetails";
    paymentData: UserPaymentData;
}

export interface CashPaymentDetails {
    cashPaid: number;
    cashReturned: number;
    coinsUsed: CashPaymentOld[];
    billsUsed: CashPaymentOld[];
    id: number;
}

export interface MifareCardDetails extends Serializable {
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

export interface AbstractTransaction {
    id: number;
    status: number;
    transactionTime: Calendar;
    transactionNumber: number;
    depletionNumber: number;
    type: string;
}

export interface TimeZone extends Serializable, Cloneable {
}

export interface UserPaymentData {
    company: string;
    ballance: number;
    branchId: number;
}

export interface EntryData extends IEntryValidationDetails, Serializable {
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
}

export interface BasicRecord {
    id: number;
    title: string;
    note: string;
    createdBy: number;
    createdOn: Calendar;
    active: boolean;
    type: string;
}

export interface EntryPackageHourRange extends EntryHourRange {
    terminalIds: number[];
}

export interface AccountingReceipt extends AbstractAccountingDocument {
    payments: AbstractPaymentUnion[];
    totalPaymentsSum: number;
}

export interface AccountingInvoiceReceipt extends AbstractAccountingDocument {
    payments: AbstractPaymentUnion[];
    purchasedProducts: BasicProductUnion[];
}

export interface AccountingInvoiceRefund extends AccountingInvoice {
}

export interface AccountingReceiptRefund extends AccountingReceipt {
}

export interface UpdateWebAccountData extends AuthorizationData {
    userId: number;
    oldPassword: string;
}

export interface HourRange {
    tableId: number;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
}

export interface CashPayment extends AbstractPayment {
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
}

export interface GeneralPayment extends AbstractPayment {
    paymentType: PaymentType;
}

export interface VoucherPayment extends AbstractPayment {
    serialNumber: string;
}

export interface Comparable<T> {
}

export interface CashPaymentOld {
    value: number;
    amountUsed: number;
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
    productsOrdered: BasicProductUnion[];
    creditCardPayments: CreditCardPaymentOld[];
    cashPayment: CashPaymentDetails;
    checkPayments: CheckPayment[];
    voucherPayments: VoucherPayment[];
    mifareCardPayment: MifareCardPayment;
    generalPayments: GeneralPayment[];
    directDebitPayments: DirectUserDebit[];
    creditPointsPayments: CreditPointsPayment[];
    paymentUserId: number;
    chargeTransaction: boolean;
}

export interface AccountingTransaction extends PaymentTransaction {
    documentType: AccountingDocumentType;
    counter: number;
    issue: string;
    reference: number;
    note: string;
    company: string;
    payUntil: string;
    relatedDocumentIds: number[];
}

export interface IDDevices extends Serializable {
    emCardsList: EmCardData[];
    fingerprintsList: FingerprintData[];
    mifareCardList: MifareCardDetails[];
}

export interface IEntryValidationDetails {
    valid: boolean;
    entryHoursId: number;
    validityEndDate: Calendar;
    reentryTimeLimit: Calendar;
    validityStartDate: Calendar;
    freezeStartDate: Calendar;
    medicalCertificateDate: Calendar;
    freezeEndDate: Calendar;
    lastEntryTime: Calendar;
}

export interface CrmLeadRecord extends BasicRecord {
    recordType: CrmRecordType;
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

export interface EmCardData extends Serializable {
    cardNumber: string;
}

export interface FingerprintData extends Serializable {
    templateData: any;
    enrollmentQuality: number;
}

export type CourseInstanceAttendancyUnion = CourseInstanceAttendancyForExerciseGroup | CourseInstanceAttendancy;

export type BasicProductUnion = ProductLimitedEntries | GiftProduct | ProductUserMembership | ProductBarcodeTicket | CoursePackage;

export type BasicUserUnion = EntranceUser | PaymentUser | ParentAccountDetails | Employee;

// export type AbstractAccountingDocumentUnion = AccountingInvoice | AccountingReceipt | AccountingInvoiceReceipt | AccountingInvoiceRefund | AccountingReceiptRefund;

export type AuthorizationDataUnion = UpdateWebAccountData | AuthorizationData;

export type AbstractPaymentUnion = CashPayment | CheckPayment | CreditCardPayment | GeneralPayment | VoucherPayment;

// export type AbstractTransactionUnion = EntryTransaction | PaymentTransaction | AccountingTransaction;
//
// export type BasicRecordUnion = AccountsRecord | CrmLeadRecord;
//
// export enum SmartClubClientType {
//     SMART_CLUB_MANY_USERS,
//     SMART_CLUB_ONE_USER,
//     SMART_CLUB_FESTIVAL,
// }

export enum CreditCompanyType {
    UNKNOWN,
    VISA,
    ISRACARD,
    MASTERCARD,
    AMERICAN_EXPRESS,
    DINERS,
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
}

export enum CourseRegistrationMethod {
    MANUAL_REGISTRATION_BY_USER_PURCHASED_POINTS,
    AUTO_REGISTRATION_FOR_DATE_RANGE,
    BY_USER_RESET_WEEKLY_SUNDAY,
    BY_USER_RESET_MONTHLY_1st,
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
    SOCIAL_MESSAGE,
}

export enum MessageType {
    REGULAR,
    REMINDER,
    SENT_FOR_PARENT,
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

export enum UserAccountTypes {
    PARENT_ACCOUNT,
    USER_ACCOUNT,
    MANAGER,
    TUTOR,
    SECRATERY,
    LEAD,
    GENERAL_WORKER,
}

export enum EntryDataPlans {
    MEMBER,
    LIMITED_ENTRIES,
    COURSE_MEMBER,
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
    RETURN_CHECK,
    REFUND_MONEY,
    REFUND_CHECK_MONEY,
    CANCEL_CHECK,
    REFUND_CREDIT_CARD,
    REFUND_SALARY,
    REFUND_BANK_TRANSFER,
    REFUND_ID_PAYMENT,
    REFUND_DIRECT_DEBIT,
    REFUND_CHECK,
    REFUND_ALLOWANCE,
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
}

export enum CrmRecordType {
    TOPIC,
    STATUS,
    REFERENCE,
}


