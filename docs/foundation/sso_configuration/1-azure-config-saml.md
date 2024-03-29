---
title: Azure SSO
---


# Configure Azure Active Directory single sign-on (SSO) integration with Amazon Web Services (AWS)



## Scope

In this tutorial, you&#39;ll learn how to integrate Amazon Web Services (AWS) with Azure Active Directory (Azure AD). When you integrate Amazon Web Services (AWS) with Azure AD, you can:

- Control in Azure AD who has access to Amazon Web Services (AWS).
- Enable your users to be automatically signed-in to Amazon Web Services (AWS) with their Azure AD accounts.
- Manage your accounts in one central location - the Azure portal.
- On our DNX Foundation, we create four new accounts in the customer master account ( **Shared-Services, Prod, NonProd, and Audit** ). Unfortunately, Azure has a limitation of setting access to just one AWS account role. As a workaround, we will need to create one application for each account, for example, one called **Shared-services,** another called **Prod** , another called **Nonprod** , and the last one called **Audit**.

![Azure01](/assets/images/Azure_SSO/az_sso_01.png)


### Prerequisites

To get started, you need the following items:

- An Azure AD subscription. If you don&#39;t have a subscription, you can get a [free account](https://azure.microsoft.com/free/).
- An AWS single sign-on (SSO) enabled subscription

---

### Step 1 - On Azure Active Directory Create one application for each account (Shared-Services, Prod, Non-Prod and Audit)

#### Adding Amazon Web Services (AWS) from the gallery

To configure the integration of Amazon Web Services (AWS) into Azure AD, you need to add Amazon Web Services (AWS) from the gallery to your list of managed SaaS apps.

1. Sign in to the [Azure portal](https://portal.azure.com/) using a Microsoft account.
2. In the Azure portal, search for and select Azure Active Directory.
3. Within the Azure Active Directory overview menu, choose Enterprise Applications \&gt; All applications.
4. Select New application to add an application.
5. In the Add from the gallery section, type Amazon Web Services (AWS) in the search box.
6. Select Amazon Web Services (AWS) from the results panel, Rename the application, for example, for Shared-Services and click on Create. Wait a few seconds while the app is added to your tenant.
7. You will need to create one application for each account.

![Azure02](/assets/images/Azure_SSO/az_sso_02.png)

---

### Step2 - Configure Azure AD SSO**

Follow these steps to enable Azure AD SSO in the Azure portal.

1. In the [Azure portal](https://portal.azure.com/), on the Amazon Web Services (AWS) application integration page, You have two options, find the Manage section and select single sign-on or you can click on Getting Started -\&gt; 2. Set up single sign on.

![Azure03](/assets/images/Azure_SSO/az_sso_03.png)

1. On the menu - Select a single sign-on method page, select SAML.

![Azure04](/assets/images/Azure_SSO/az_sso_04.png)

1. You will be asked to save and test the single sign-on setting; click on &quot; **No. I&#39;ll save later&quot;** becausewe haven&#39;t configured the parameters yet.
2. On the Set up single sign-on with SAML page, click the edit/pen icon for Basic SAML Configuration to edit the settings.
3. Edit the identifier (Entity ID) settings, for example in the Shared-Services app set - https://signin.aws.amazon.com/saml#shared and click **on save**.

![Azure06](/assets/images/Azure_SSO/az_sso_06.png)

A suggestion for this field:

| Account Name  |            URL
| --- | --- |
| Master app | **https://signin.aws.amazon.com/saml#**
| Shared-Service app | **https://signin.aws.amazon.com/saml#shared**|
| Non-prod app | **https://signin.aws.amazon.com/saml#nonprod**|
| Prod app | **https://signin.aws.amazon.com/saml#prod**|
| Audit app | **https://signin.aws.amazon.com/saml#audit**|


We recommend this approach for the following reasons:

- Each application provides you with
- a unique X509 certificate. Each instance of an AWS app instance can then have a different certificate expiry date, which can be managed on an individual AWS account basis. Overall certificate rollover is easier in this case.
- You do not need to set this ID for each account, but each app needs to have one unique Identifier.

1. You do not need to make changes on User Attributes &amp; Claims Edit
2. On the Set up single sign-on with SAML page, in the SAML Signing Certificate (Step 3) dialog box, select Add a certificate.

![Azure07](/assets/images/Azure_SSO/az_sso_07.png)

7.1 - Generate a new SAML signing certificate, and then select New Certificate. Enter an email address for certificate notifications

![Azure08](/assets/images/Azure_SSO/az_sso_08.png)

![Azure09](/assets/images/Azure_SSO/az_sso_09.png)

7.2 In the SAML Signing Certificate section, find Federation Metadata XML and select Download to download the certificate and save it on your computer and send to the DNX team member.

![Azure11](/assets/images/Azure_SSO/az_sso_11.png)

**Remember that you will need to repeat step 7.2 for all other accounts.**

8. You do not need to change anything on Set up < account > Shared-Services

![Azure12](/assets/images/Azure_SSO/az_sso_12.png)


---

### Step3 - Configure Azure AD SSO - Audit Account**

- Follow these steps to enable Azure AD SSO in the Azure portal.

1. In the[Azure portal](https://portal.azure.com/), on the Amazon Web Services (AWS) Audit application integration page, You have two options, find the Manage section and select single sign-on or you can click on Getting Started -\&gt; 2. Set up single sign on.

![Azure13](/assets/images/Azure_SSO/az_sso_13.png)

2. On the menu - Select a single sign-on method page, select SAML.

![Azure14](/assets/images/Azure_SSO/az_sso_14.png)

3. You will be asked to save and test the single sign-on setting; click on &quot; **No. I&#39;ll save later&quot;** becausewe haven&#39;t configured the parameters yet.

4. On the Set up single sign-on with SAML page, click the edit/pen icon for User and attributes &amp; Claims to edit the settings

![Azure15](/assets/images/Azure_SSO/az_sso_15.png)

5.  Select  [https://aws.amazon.com/SAML/Attributes/Role](https://aws.amazon.com/SAML/Attributes/Roles) and clear the field Source attribute \*.

![Azure16](/assets/images/Azure_SSO/az_sso_16.png)

6. Type the role

 - arn:aws:iam::AccountID:role/AuditAccess,arn:aws:iam::AccountID:saml-provider/Company Name
  and press enter

 **Example**

```json
 arn:aws:iam::012345678900:role/AuditAccess,arn:aws:iam::012345678900:saml-provider/yourcompanyname-sso**
```


![Azure17](/assets/images/Azure_SSO/az_sso_17.png)

7. Verify if the field is filled correctly and click on

![Azure18](/assets/images/Azure_SSO/az_sso_18.png)

![Azure19](/assets/images/Azure_SSO/az_sso_19.png)


---

### Step4 - Configure Amazon Web Services (AWS) SSO

**You will need to do this step on each account (Shared-Services, Prod, NonProd)**

1. In a different browser window, sign-on to your AWS company site as an administrator.
2. Select Identity and Access Management.

![Azure20](/assets/images/Azure_SSO/az_sso_20.png)

3. Click on Identity Providers
4. Click on the Provider name - \&gt; \&lt;Foundation\&gt;-SSO

![Azure21](/assets/images/Azure_SSO/az_sso_21.png)

5. Click Upload metadata and upload the XML created on the step 7.2. and click on Upload. The SSO on each account is created in the identity stack, we just need to updated with the XML created for this specific app.

![Azure22](/assets/images/Azure_SSO/az_sso_22.png)

6. Select Services. Under Security, Identity &amp; Compliance, select IAM.

![Azure23](/assets/images/Azure_SSO/az_sso_23.png)

7. In the IAM section, select Policies.

![Azure24](/assets/images/Azure_SSO/az_sso_24.png)


8. Create a new policy by selecting Create policy for fetching the roles from the AWS account in Azure AD user provisioning.

![Azure25](/assets/images/Azure_SSO/az_sso_25.png)

9. Create your own policy to fetch all the roles from AWS accounts.

![Azure26](/assets/images/Azure_SSO/az_sso_26.png)

a. In Create policy, select the JSON tab.
b. In the policy document, add the following JSON:

```json
{
	"Version": "2012-10-17",
	"Statement": [
    	{
        	"Effect": "Allow",
        	"Action": [
        	"iam:ListRoles"
        	],
        	"Resource": "*"
    	}
	]
}
```

![Azure27](/assets/images/Azure_SSO/az_sso_27.png)

1. Define the new policy.

![Azure28](/assets/images/Azure_SSO/az_sso_28.png)

a. For Name, enter \&lt;Account\&gt;AzureSSOListRoles, for example: SharedAzureSSOListRoles.
b. For Description, enter This policy will allow to fetch the roles from AWS accounts.
c. Select Create policy.

2. Create a new user account in the AWS IAM service.
 a. In the AWS IAM console, select Users.

![Azure29](/assets/images/Azure_SSO/az_sso_29.png)

b. To create a new user, select Add user.

![Azure30](/assets/images/Azure_SSO/az_sso_30.png)

c. In the Add user section:

![Azure31](/assets/images/Azure_SSO/az_sso_31.png)

  - Enter the user name as \&lt;Account\&gt;AzureSSOListRoles, for example, SharedAzureSSOListRoles.
  - For the access type, select Programmatic access. This way, the user can invoke the APIs and fetch the roles from the AWS account.
  - Select Next Permissions.

3. Create a new policy for this user.

 ![Azure32](/assets/images/Azure_SSO/az_sso_32.png)

a. Select Attach existing policies directly.

 b. Search for the newly created policy in the filter section SharedAzureSSOListRoles.
 c. Select the policy, and then select Next: Review.

4. Review the policy to the attached user.

![Azure32](/assets/images/Azure_SSO/az_sso_33.png)

a. Review the user name, access type, and policy mapped to the user.
 b. Select Create user.

5. Download the user credentials of a user.

 ![Azure34](/assets/images/Azure_SSO/az_sso_34.png)

a. Copy the user Access key ID and Secret access key.
 b. Enter these credentials into the Azure AD user provisioning section to fetch the roles from the AWS console.
 c. Select Close.

---

### Step 5 - How to configure role provisioning in Amazon Web Services (AWS)

1.  ### In the Azure AD management portal, in the AWS app, go to Provisioning.

![Azure35](/assets/images/Azure_SSO/az_sso_35.png)

2.  ### Enter the access key and secret in the clientsecret and Secret Token fields, respectively.

![Azure36](/assets/images/Azure_SSO/az_sso_36.png)

a. Enter the AWS user access key in the clientsecret field.

b. Enter the AWS user secret in the Secret Token field.

c. Select Test Connection.

d. Save the setting by selecting Save.

3. ### In the Settings section, for Provisioning Status, select On. Then select Save.

![Azure37](/assets/images/Azure_SSO/az_sso_37.png)

---

### Step 6 - Assign the Azure AD test user

#### In this section, you&#39;ll enable user to use Azure single sign-on by granting access to Amazon Web Services (AWS).

1. In the Azure portal, search for and select Azure Active Directory.

2. Within the Azure Active Directory overview menu, choose Enterprise Applications \&gt; All applications.

3. In the application list, select the AWS application.

4. In the app&#39;s overview page, find the Manage section and select Users and groups.

![Azure38](/assets/images/Azure_SSO/az_sso_38.png)

5. Select Add user, then select Users and groups in the Add Assignment dialog.

![Azure39](/assets/images/Azure_SSO/az_sso_39.png)

6. In the Users and groups dialog, select the user from the Users list, then click the Select button at the bottom of the screen.

7. Select the role, in the Select Role dialog, select the appropriate role for the user from the list and then click the Select button at the bottom of the screen.

8. In the Add Assignment dialog, select the role desired and click the Assign button.

![Azure40](/assets/images/Azure_SSO/az_sso_40.png)

Ps: Instead of adding User, you can add a group as well.

---

### Step 7 - Test the SSO Access

1. Install My Apps Secure Sign-in Plugin

1. Firefox - [https://addons.mozilla.org/en-US/firefox/addon/access-panel-extension/](https://addons.mozilla.org/en-US/firefox/addon/access-panel-extension/)

2. Chrome - [https://chrome.google.com/webstore/detail/my-apps-secure-sign-in-ex/ggjhpefgjjfobnfoldnjipclpcfbgbhl](https://chrome.google.com/webstore/detail/my-apps-secure-sign-in-ex/ggjhpefgjjfobnfoldnjipclpcfbgbhl)

2. Sign in with your Azure account

![Azure41](/assets/images/Azure_SSO/az_sso_41.png)

- You will have access to all applications:

![Azure42](/assets/images/Azure_SSO/az_sso_42.png)