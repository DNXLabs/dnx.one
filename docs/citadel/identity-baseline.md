---
title: Identity Baseline
sidebar_label: Identity Baseline
sidebar_position: 10
---
The process of implementation of Citadel requires that the AWS account is setup with common IAM roles. These roles allow continuous compliance tools to run and create infrastructure. It includes roles to allow access from DNX and DNX automation, as well as roles for accessing the account billing (BillingAccess) and to deploy infrastructure from a developer machine (InfraDeploy).

DNX engineers will log on to this IDP account using an MFA-enforced SSO and can assume the DNX role, a similar process is described at https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html).

# Requirements
Admin access to the AWS account.

# Deployment
This section shows how to deploy the CloudFormation Template required to deploy the basic roles needed to deploy Citadel.

## Creating the CloudFormation Stack

Steps:
1. Login to AWS console.
2. Go to Services and type "CloudFormation".
3. Click on CloudFormation.

![Image](https://files.readme.io/13a038c-image4.png)


4. Click on Create Stack
   ![4.1 Select "With new resources (standard)"](https://files.readme.io/cbf979e-image1.png)
   
5. On the next page insert the stack link on Amazon S3 URL.

Stack link: https://dnx-assets-prod.s3.ap-southeast-2.amazonaws.com/assets/identity-citadel.cf.yml
![Image](https://files.readme.io/2375c22-image5.png)
6. Click Next.

7. Insert the stack name "identity-baseline".


8. In the Parameters area, we have five options to choose from (CreateInfraDeployUser, DNX, IdentityProviderMetadataDocument, OrgName and TrustArns).
 
```bash
   {
   "data": {
   "h-0": "Parameter",
   "h-1": "Description",
   "0-0": "CreateInfraDeployUser",
   "1-0": "DNX",
   "2-0": "DNXAutomation",
   "3-0": "OrgName",
   "4-0": "SAMLProviderArn",
   "5-0": "SAMLProviderDocument",
   "6-0": "TrustArns",
   "1-1": "allow DNX access to this account. Change to true.",
   "0-1": "user to be used in some pipeline systems. leave as default (false).",
   "2-1": "allow access from DNX automation (required for Citadel-as-a-Service)",
   "3-1": "name of YOUR organization for purpose of using in resources naming. E.g.: “apple” or “tesla”.",
   "4-1": "ARN of SAML Provider to use. This creates IAM roles 'InfraDeploy' and 'BillingAccess'. Leave as default can be added later\n\n*Use when the SAML Provider is created manually in the account, otherwise use SAMLProviderDocument instead.* ",
   "5-1": "SAML Provider XML Document. \nUse only when XML is less then 4096 characters. \nThis creates the SAML Provider and IAM roles 'InfraDeploy' and 'BillingAccess'. Add SAML document if available or leave the default and it can be added later",
   "6-1": "Add ARN or Account ID that can deploy resources in this account. \nAn exemple would be the ARN of a InfraDeploy role from the Shared-Services AWS account"
   },
   "cols": 2,
   "rows": 7
   }
   ```

![Image](https://files.readme.io/d2a27d8-image3.png)


9. On Configure stack options click Next.

10. On the Review page, mark the checkbox "I acknowledge that AWS CloudFormation might create IAM resources with custom names" and click in Create stack.

![Image](https://files.readme.io/69a0387-image2.png)

11. On the Next page, wait for a few minutes and click on Refresh until the process is completed.

12. When the status changes to CREATE_COMPLETE, the process is done.

You will need to perform the above procedure for each new account where Citadel will be provisioned.

## Account Number

Each Amazon account has an associated 12-digit account identifier (ID). This identifier needs to be sent to DNX.
Below is how to know your account number.
1. Log in to the AWS Management Console.
2. At the top of the page, click the link that is your account name.
3. Click My Account.
4. Your 12-digit account ID is listed under Account Settings.

When the Identity-Baseline Stack is created in each account please notify DNX and send us the Account ID numbers.