# Plugin user guide eBay OAuth account management 

<div class="container-toc"></div>

## Activating and changing accounts

Go to **System » Markets » eBay » Accounts »OAuth2** to activate new accounts for eBay. You need your access data consisting of the user name and password. When changing your eBay access data, you have to update and synchronise your account in plentymarkets. plentymarkets allows you to manage several eBay accounts. Proceed as follows to add one or more accounts.

##### Activating a new account:

 1. Go to **System » Markets » eBay » OAuth2**.
 2. Select **Add Production account** for the environment if the account should not be a test account. <br>
 →  You will be forwarded to eBay and will have to authenticate your data. <br>
 → The account will be displayed in the **OAuth2** menu.
    
When activating or updating an account, a token with a validity of 18 months will be generated. There will be no automatic warning at the end of the period of validity. The token will also become invalid when the eBay account data is changed.

Go to **System » Markets » eBay » OAuth2** to rename or delete accounts. You have to rename your account in plentymarkets, for example, when changing your eBay user name.


## Required rights for the eBay OAuth2 plugin
    
Users of the user class **Variable** need menu rights and REST-API rights to use the **eBay OAuth2 plugin**.

Use the **System » Settings » User » Accounts » User account » Tab: Right** menu to assign rights.

→ **Tip**: Use the filter function to search for users of the user class **Variable**. To do so, go to **Tab: Filter** and select the filter **Variable** within the drop-down list **Class**. Click on **Search**.
    
#### Required rights for the eBay OAuth2 plugin
    
The required menu rights and REST-API rights for variable user classes are listed below.

#### **Required menu rights:**
- Settings » Markets » eBay » **Accounts** » **OAuth2**

#### Assigning menu rights:

1. Go to **System » Settings » User » Accounts**.
2. Click on the **user** that you want to assign rights to.
3. Go to **Tab: Right » Tab: Menu**.
4. Place a check mark next to the required rights.
5. **Save** the settings.

#### **Required REST-API rights:**
    
- Markets » **Credentials** and all subordinate rights
- Markets » eBay » **Marketplace** » **Show marketplace**
    
#### Assigning REST-API rights
    
1. Go to **System » Settings » User » Accounts**.
2. Click on the **user** that you want to assign rights to.
3. Go to **Tab: Right » Tab: REST-API**.
4. Place a check mark next to the required rights.
5. **Save** the settings.


## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE.- find further information in the [LICENSE.md](https://github.com/plentymarkets/plugin-etsy/blob/master/LICENSE.md).
