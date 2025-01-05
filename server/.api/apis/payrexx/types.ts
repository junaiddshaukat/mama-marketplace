import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type CancelAWaitingTransactionMetadataParam = FromSchema<typeof schemas.CancelAWaitingTransaction.metadata>;
export type CancelAWaitingTransactionResponse200 = FromSchema<typeof schemas.CancelAWaitingTransaction.response['200']>;
export type CancelAWaitingTransactionResponse404 = FromSchema<typeof schemas.CancelAWaitingTransaction.response['404']>;
export type CaptureATransactionMetadataParam = FromSchema<typeof schemas.CaptureATransaction.metadata>;
export type CaptureATransactionResponse200 = FromSchema<typeof schemas.CaptureATransaction.response['200']>;
export type ChargeAPreAuthorizedReservedTransactionBodyParam = FromSchema<typeof schemas.ChargeAPreAuthorizedReservedTransaction.body>;
export type ChargeAPreAuthorizedReservedTransactionMetadataParam = FromSchema<typeof schemas.ChargeAPreAuthorizedReservedTransaction.metadata>;
export type ChargeAPreAuthorizedReservedTransactionResponse200 = FromSchema<typeof schemas.ChargeAPreAuthorizedReservedTransaction.response['200']>;
export type CreateACashTransactionBodyParam = FromSchema<typeof schemas.CreateACashTransaction.body>;
export type CreateACashTransactionMetadataParam = FromSchema<typeof schemas.CreateACashTransaction.metadata>;
export type CreateACashTransactionResponse200 = FromSchema<typeof schemas.CreateACashTransaction.response['200']>;
export type CreateADesignBodyParam = FromSchema<typeof schemas.CreateADesign.body>;
export type CreateADesignMetadataParam = FromSchema<typeof schemas.CreateADesign.metadata>;
export type CreateADesignResponse200 = FromSchema<typeof schemas.CreateADesign.response['200']>;
export type CreateAGatewayBodyParam = FromSchema<typeof schemas.CreateAGateway.body>;
export type CreateAGatewayMetadataParam = FromSchema<typeof schemas.CreateAGateway.metadata>;
export type CreateAGatewayResponse200 = FromSchema<typeof schemas.CreateAGateway.response['200']>;
export type CreateANewSubscriptionBodyParam = FromSchema<typeof schemas.CreateANewSubscription.body>;
export type CreateANewSubscriptionMetadataParam = FromSchema<typeof schemas.CreateANewSubscription.metadata>;
export type CreateANewSubscriptionResponse200 = FromSchema<typeof schemas.CreateANewSubscription.response['200']>;
export type CreateAPageBodyParam = FromSchema<typeof schemas.CreateAPage.body>;
export type CreateAPageMetadataParam = FromSchema<typeof schemas.CreateAPage.metadata>;
export type CreateAPageResponse200 = FromSchema<typeof schemas.CreateAPage.response['200']>;
export type CreateAPageResponse404 = FromSchema<typeof schemas.CreateAPage.response['404']>;
export type CreateAPaylinkBodyParam = FromSchema<typeof schemas.CreateAPaylink.body>;
export type CreateAPaylinkMetadataParam = FromSchema<typeof schemas.CreateAPaylink.metadata>;
export type CreateAPaylinkResponse200 = FromSchema<typeof schemas.CreateAPaylink.response['200']>;
export type CreateAQrCodeBodyParam = FromSchema<typeof schemas.CreateAQrCode.body>;
export type CreateAQrCodeMetadataParam = FromSchema<typeof schemas.CreateAQrCode.metadata>;
export type CreateAQrCodeResponse200 = FromSchema<typeof schemas.CreateAQrCode.response['200']>;
export type CreateManualPayoutBodyParam = FromSchema<typeof schemas.CreateManualPayout.body>;
export type CreateManualPayoutMetadataParam = FromSchema<typeof schemas.CreateManualPayout.metadata>;
export type CreateManualPayoutResponse200 = FromSchema<typeof schemas.CreateManualPayout.response['200']>;
export type DeleteADesignMetadataParam = FromSchema<typeof schemas.DeleteADesign.metadata>;
export type DeleteADesignResponse200 = FromSchema<typeof schemas.DeleteADesign.response['200']>;
export type DeleteAGatewayMetadataParam = FromSchema<typeof schemas.DeleteAGateway.metadata>;
export type DeleteAGatewayResponse200 = FromSchema<typeof schemas.DeleteAGateway.response['200']>;
export type DeleteAQrCodeMetadataParam = FromSchema<typeof schemas.DeleteAQrCode.metadata>;
export type DeleteAQrCodeResponse200 = FromSchema<typeof schemas.DeleteAQrCode.response['200']>;
export type DeleteAQrCodeScanBodyParam = FromSchema<typeof schemas.DeleteAQrCodeScan.body>;
export type DeleteAQrCodeScanMetadataParam = FromSchema<typeof schemas.DeleteAQrCodeScan.metadata>;
export type DeleteAQrCodeScanResponse200 = FromSchema<typeof schemas.DeleteAQrCodeScan.response['200']>;
export type DeleteAReservedTransactionMetadataParam = FromSchema<typeof schemas.DeleteAReservedTransaction.metadata>;
export type DeleteAReservedTransactionResponse200 = FromSchema<typeof schemas.DeleteAReservedTransaction.response['200']>;
export type GetAllActivePaymentMethodsBodyParam = FromSchema<typeof schemas.GetAllActivePaymentMethods.body>;
export type GetAllActivePaymentMethodsMetadataParam = FromSchema<typeof schemas.GetAllActivePaymentMethods.metadata>;
export type GetAllActivePaymentMethodsResponse200 = FromSchema<typeof schemas.GetAllActivePaymentMethods.response['200']>;
export type GetAllActivePaymentMethodsResponse400 = FromSchema<typeof schemas.GetAllActivePaymentMethods.response['400']>;
export type GetOnePaymentMethodMetadataParam = FromSchema<typeof schemas.GetOnePaymentMethod.metadata>;
export type GetOnePaymentMethodResponse200 = FromSchema<typeof schemas.GetOnePaymentMethod.response['200']>;
export type GetOnePaymentMethodResponse400 = FromSchema<typeof schemas.GetOnePaymentMethod.response['400']>;
export type LoginASubscriptionCustomerBodyParam = FromSchema<typeof schemas.LoginASubscriptionCustomer.body>;
export type LoginASubscriptionCustomerMetadataParam = FromSchema<typeof schemas.LoginASubscriptionCustomer.metadata>;
export type LoginASubscriptionCustomerResponse200 = FromSchema<typeof schemas.LoginASubscriptionCustomer.response['200']>;
export type PreAuthorizeATokenizationBodyParam = FromSchema<typeof schemas.PreAuthorizeATokenization.body>;
export type PreAuthorizeATokenizationMetadataParam = FromSchema<typeof schemas.PreAuthorizeATokenization.metadata>;
export type PreAuthorizeATokenizationResponse200 = FromSchema<typeof schemas.PreAuthorizeATokenization.response['200']>;
export type RefundATransactionBodyParam = FromSchema<typeof schemas.RefundATransaction.body>;
export type RefundATransactionMetadataParam = FromSchema<typeof schemas.RefundATransaction.metadata>;
export type RefundATransactionResponse200 = FromSchema<typeof schemas.RefundATransaction.response['200']>;
export type RemoveAPaylinkMetadataParam = FromSchema<typeof schemas.RemoveAPaylink.metadata>;
export type RemoveAPaylinkResponse200 = FromSchema<typeof schemas.RemoveAPaylink.response['200']>;
export type RemoveASubscriptionMetadataParam = FromSchema<typeof schemas.RemoveASubscription.metadata>;
export type RemoveASubscriptionResponse200 = FromSchema<typeof schemas.RemoveASubscription.response['200']>;
export type RetrieveADesignMetadataParam = FromSchema<typeof schemas.RetrieveADesign.metadata>;
export type RetrieveADesignResponse200 = FromSchema<typeof schemas.RetrieveADesign.response['200']>;
export type RetrieveAGatewayMetadataParam = FromSchema<typeof schemas.RetrieveAGateway.metadata>;
export type RetrieveAGatewayResponse200 = FromSchema<typeof schemas.RetrieveAGateway.response['200']>;
export type RetrieveAPageMetadataParam = FromSchema<typeof schemas.RetrieveAPage.metadata>;
export type RetrieveAPageResponse200 = FromSchema<typeof schemas.RetrieveAPage.response['200']>;
export type RetrieveAPageResponse404 = FromSchema<typeof schemas.RetrieveAPage.response['404']>;
export type RetrieveAPaylinkMetadataParam = FromSchema<typeof schemas.RetrieveAPaylink.metadata>;
export type RetrieveAPaylinkResponse200 = FromSchema<typeof schemas.RetrieveAPaylink.response['200']>;
export type RetrieveAQrCodeMetadataParam = FromSchema<typeof schemas.RetrieveAQrCode.metadata>;
export type RetrieveAQrCodeResponse200 = FromSchema<typeof schemas.RetrieveAQrCode.response['200']>;
export type RetrieveAQrCodeResponse404 = FromSchema<typeof schemas.RetrieveAQrCode.response['404']>;
export type RetrieveATransactionMetadataParam = FromSchema<typeof schemas.RetrieveATransaction.metadata>;
export type RetrieveATransactionResponse200 = FromSchema<typeof schemas.RetrieveATransaction.response['200']>;
export type RetrieveAllDesignsBodyParam = FromSchema<typeof schemas.RetrieveAllDesigns.body>;
export type RetrieveAllDesignsMetadataParam = FromSchema<typeof schemas.RetrieveAllDesigns.metadata>;
export type RetrieveAllDesignsResponse200 = FromSchema<typeof schemas.RetrieveAllDesigns.response['200']>;
export type RetrieveAllPaymentProvidersMetadataParam = FromSchema<typeof schemas.RetrieveAllPaymentProviders.metadata>;
export type RetrieveAllPaymentProvidersResponse200 = FromSchema<typeof schemas.RetrieveAllPaymentProviders.response['200']>;
export type RetrievePagesMetadataParam = FromSchema<typeof schemas.RetrievePages.metadata>;
export type RetrievePagesResponse200 = FromSchema<typeof schemas.RetrievePages.response['200']>;
export type RetrievePagesResponse404 = FromSchema<typeof schemas.RetrievePages.response['404']>;
export type RetrievePayoutMetadataParam = FromSchema<typeof schemas.RetrievePayout.metadata>;
export type RetrievePayoutResponse200 = FromSchema<typeof schemas.RetrievePayout.response['200']>;
export type RetrievePayoutWithDetailsMetadataParam = FromSchema<typeof schemas.RetrievePayoutWithDetails.metadata>;
export type RetrievePayoutWithDetailsResponse200 = FromSchema<typeof schemas.RetrievePayoutWithDetails.response['200']>;
export type RetrievePayoutsMetadataParam = FromSchema<typeof schemas.RetrievePayouts.metadata>;
export type RetrievePayoutsResponse200 = FromSchema<typeof schemas.RetrievePayouts.response['200']>;
export type RetrieveTransactionsBodyParam = FromSchema<typeof schemas.RetrieveTransactions.body>;
export type RetrieveTransactionsMetadataParam = FromSchema<typeof schemas.RetrieveTransactions.metadata>;
export type RetrieveTransactionsResponse200 = FromSchema<typeof schemas.RetrieveTransactions.response['200']>;
export type SendMailReceiptBodyParam = FromSchema<typeof schemas.SendMailReceipt.body>;
export type SendMailReceiptMetadataParam = FromSchema<typeof schemas.SendMailReceipt.metadata>;
export type SendMailReceiptResponse200 = FromSchema<typeof schemas.SendMailReceipt.response['200']>;
export type SignaturecheckMetadataParam = FromSchema<typeof schemas.Signaturecheck.metadata>;
export type SignaturecheckResponse200 = FromSchema<typeof schemas.Signaturecheck.response['200']>;
export type UpdateADesignBodyParam = FromSchema<typeof schemas.UpdateADesign.body>;
export type UpdateADesignMetadataParam = FromSchema<typeof schemas.UpdateADesign.metadata>;
export type UpdateADesignResponse200 = FromSchema<typeof schemas.UpdateADesign.response['200']>;
export type UpdateAPreAuthorizationBodyParam = FromSchema<typeof schemas.UpdateAPreAuthorization.body>;
export type UpdateAPreAuthorizationMetadataParam = FromSchema<typeof schemas.UpdateAPreAuthorization.metadata>;
export type UpdateAPreAuthorizationResponse200 = FromSchema<typeof schemas.UpdateAPreAuthorization.response['200']>;
export type UpdateASubscriptionBodyParam = FromSchema<typeof schemas.UpdateASubscription.body>;
export type UpdateASubscriptionMetadataParam = FromSchema<typeof schemas.UpdateASubscription.metadata>;
export type UpdateASubscriptionResponse200 = FromSchema<typeof schemas.UpdateASubscription.response['200']>;
export type UpdateContactDetailsBodyParam = FromSchema<typeof schemas.UpdateContactDetails.body>;
export type UpdateContactDetailsMetadataParam = FromSchema<typeof schemas.UpdateContactDetails.metadata>;
export type UpdateContactDetailsResponse200 = FromSchema<typeof schemas.UpdateContactDetails.response['200']>;
