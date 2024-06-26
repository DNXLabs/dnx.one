---
title: "Preparing your AWS Organization and Accounts"
sidebar_label: Preparing your AWS Organization and Accounts
sidebar_position: 1
---
# AWS Organization and Accounts

## Scope

Create the organization following the steps at: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tutorials_basic.html#tutorial-orgs-step1

Create the new AWS Accounts as per the architecture defined.

    
:::caution

### AWS Account Email Addresses
To create the accounts, you will need a unique email address for each account.

If you use Office365 as your email provider, you must create an email alias per account. 

Examples:
- aws-audit@piedpiper.com
- aws-prod@piedpiper.com

If your email provider is Google, it supports adding a plus sign to automatically create aliases.

Example:Email is aws@piedpiper.com

Supported aliases:
- aws+audit@piedpiper.com
- aws+prod@piedpiper.com

:::

With the account names and emails prepared, next step is to create the new AWS accounts.

## Creating AWS Accounts

Follow the steps at: [https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new
](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new)

Once the accounts are created, it's a good practice to add to an Organizational Unit. It will help deploying CloudFormation Stacks in the next step and later to apply Service Control Policies to the accounts.

## Creating an Organizational Unit

Follow the steps at:
[https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#create_ou](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html#create_ou)

You can name your new OU as "Citadel" or any name you wish for this new group of accounts.

Once the OU is created, move the new accounts into the OU, by selecting the AWS Accounts and selecting "Actions" -> "Move".

# Deploy identity-baseline to new AWS Accounts

The process of implementation of Citadel requires that the AWS account is setup with common IAM roles. These roles allow continuous compliance tools to run and create infrastructure. It includes roles to allow access from DNX and Citadel Automation, as well as roles for accessing the account billing (BillingAccess) and to deploy infrastructure from a developer machine (InfraDeploy).

When enabled, DNX engineers can log on to the accounts using an MFA-enforced SSO and assume a role in the target AWS account, a similar process is described at https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html).


## Creating the CloudFormation StackSet

Steps:
1. Login to AWS console.
2. Go to Services and type "CloudFormation"
3. Click on CloudFormation

   ![Image](https://files.readme.io/8f819ae-13a038c-image4.png)

4. Click on StackSets in the left-hand sidebar.

:::caution

### Trusted Access
If you created the AWS Organization and it's the first time accessing StackSets, you will see the following message as below, click \"Enable trusted access\" to allow the Master (Management) account to deploy CloudFormation Stacks to the Organization child accounts.

:::

![Image](https://files.readme.io/be5d1bb-console-stacksets-enable-trusted-access-from-stacksets-list.png)

5. Click "Create StackSet"

6.  Select "Template is ready" and "Amazon S3 URL" to specify the template to be used.
    Enter the URL: [https://dnx-assets-prod.s3.ap-southeast-2.amazonaws.com/assets/identity-citadel.cf.yml](https://dnx-assets-prod.s3.ap-southeast-2.amazonaws.com/assets/identity-citadel.cf.yml)
    And click Next.

    ![Image](https://files.readme.io/0e98cc4-Untitled_picture0.png)
    
7. Enter the stack name as "identity-baseline", set the OrgName as your organization name


![Image](https://files.readme.io/ab8a1ba-Untitled_picture01.png)

8. Click Next and enter the OUs to deploy this stack.

Select "Deploy to organizational units (OUs)"

Enter "AWS OU ID" as the ID copied from the Organization before.

Leave "Automatic deployment" enabled

Select "Account removal behavior" as Retain stacks.

On Specify regions, add your primary region to the list.


![Image](https://files.readme.io/34adce5-Untitled_picture02.png)
Deployment options can be left as default and click Next.

9. Review and click "Submit"
   ![Image](https://files.readme.io/e3dc968-console-create-stackset-review-capabilities.png)

10. Wait a few moments and click on "Stack Instances", you should see all stacks with the status "CURRENT"

## Account Number

Each Amazon account has an associated 12-digit account identifier (ID). This identifier needs to be sent to your Citadel customer engineer or partner.
Below is how to know your account number.
1. Log in to the AWS Management Console.
2. At the top of the page, click the link that is your account name.
3. Click My Account.
4. Your 12-digit account ID is listed under Account Settings.

When the Identity-Baseline Stack is created in each account please notify DNX and send us the Account ID numbers.