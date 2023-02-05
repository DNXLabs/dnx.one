---
title: AWS SSO
---

AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create or connect your workforce identities and manage their access centrally across AWS accounts and applications. IAM Identity Center is the recommended approach for workforce authentication and authorization on AWS for organizations of any size and type.

### Adding users/permissions when using AWS SSO

**Creating Permission Sets**

Permission sets are stored in IAM Identity Center and define the level of access that users and groups have to an AWS account. Perform the following steps to create a permission set that grants administrative permissions.
1. Open the IAM Identity Center console using your AWS account root user credentials.
2. In the IAM Identity Center navigation pane, under Multi-account permissions, choose Permission sets.
3. Choose to Create permission set.
4. For Step 1: Select permission set type, on the Select permission set type page, keep the default settings and choose Next. The default settings grant full access to AWS services and resources using the AdministratorAccess predefined permission set.
5. The predefined AdministratorAccess permission set uses the AdministratorAccess AWS-managed policy.
6. For Step 2: Specify permission set details, on the Specify permission set details page, keep the default settings and choose Next. The default setting limits your session to one hour.
7. For Step 3: Review and create, on the Review and create page, do the following:
   - Review the permission set type and confirm that it is AdministratorAccess.
   - Review the AWS-managed policy and confirm that it is AdministratorAccess.
   - Choose **Create.**

**Adding users**

Now that you've created an administrative user in IAM Identity Center, you can grant additional users in your identity source single sign-on access to one or more AWS accounts in your organization.
1. Open the IAM Identity Center console using your AWS account root user credentials.
2. In the IAM Identity Center navigation pane, choose Users.
3. Select Add user
4. Fill in the new user information, then choose Next.
    - Obs: The username must be the IdP user e-mail!
5. Add the user to a Group (Optional), then choose Next
6. Review the information and select Add user.

**Assigning User's Accounts Permissions**
1. Open the IAM Identity Center console using your AWS account root user credentials.
2. In the IAM Identity Center navigation pane, under Multi-account permissions, choose AWS accounts.
3. Select the desired account and then click on Assign users or groups
4. Select the user's/group's that you want to assign to that account, then select Next.
5. Select the permission set that must be assigned to those users/groups, then click Next.
6. Review the pieces of information and select Submit.