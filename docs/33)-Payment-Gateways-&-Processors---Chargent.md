### What are Payment Gateways  

Payment gateways are services that determine whether a card used for a payment is legit or fraudulent and it determines whether or not it will be approved or declined for a transaction (a user has enough funds). 

***

### What are Payment Processors  

These are services that actually move the money from a payee's account to the merchants account. Most companies that provide payment processing services also provide payment gateway services (for example stripe), so you typically only need one platform to do both things.    

***

### When should you suggest the use of Payment Gateways

If there is a need for a user/customer to pay for something, you will likely need to leverage a payment gateway to make that happen, unless it is explicitly stated this is already setup on another platform.    

***

### What functionality do payment gateways have?

Most payment gateways have the following functionality (and unless it is otherwise stated you should assume they have it and put it in your assumptions slide):  

1) REST & SOAP API Services (would only suggest API use if a perfect fluid UI is explicitly stated and **I would suggest using chargent** to make that ultra simple)  
2) The ability to store payment options/preferences  
3) The ability to manage recurring billing  
4) **Hosted Checkout/Payment Pages (I would always pick this over the API unless a perfect fluid UI is explicitly stated)  **

It's important to remember that each of these features exist. There is no need to build this functionality within Salesforce and risk PCI compliance when your payment gateways can manage all of that.  

*** 

### Paypal Example of Hosted Checkout Page
 
Information on how to setup a hosted checkout page and both send and receive information from it: [PayPal Configure Hosted Checkout Page](https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/configure-hosted-checkout/)  

Information on how Gateway Secure Token's work and Transparent Redirects: [Gateway Secure Tokens and Transparent Redirects](https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/configure-hosted-checkout/)  

NOTE: Transparent redirects allow you to post to your payment gateway without actually traversing to a separate page.

***

### Populate Examples of Payment Gateways that are also Payment Processors  

All of the platforms below offer both payment gateway and payment processing services

1) Stripe  
2) Paypal  
3) Square  
4) Helcim  

***

### What is Chargent  

Chargent is a managed package that allows you to easily integrate with you payment gateway of choice to allow for easy payments, recurring billing and more. If you have a need in your scenario to connect to a payment gateway, and no other mechanism to connect exists (via your ERP or other systems) Chargent is a simple way to make that integration happen easily while being PCI compliant.   

NOTE: I would typically only suggest this if one of the following is true:  
1) You need an extremely fluid UI in your exp site to take payments  
2) The scenario explicitly states that you need to manage recurring payments and you cannot infer (or it's completely ruled out) that your ERP is able to provide this functionality.   

***

### How does Chargent store payment options

Chargent does not store your payment options for you, the payment gateway should be the one storing those payment options. For example, if your payment gateway is PayPal, PayPal has the ability to store all of that information for someone. I would not suggest hosting that within Salesforce unless it explicitly states a need to do so.

***

### Chargent Anywhere   

This product just allows you to make payments tied to any object in Salesforce, so chargent pay can be hosted on any object page, and chargent transactions can be linked to any object. 

***

### Chargent Recurring Payments   

Chargent has the ability to setup recurring payments within its product. In many cases you also need to have this feature enabled with your payment gateway as well. You then have the ability to setup a batch job within SF (provided by Chargent) that can reach manage all the recurring payments in your system. 

*** 

### Chargent Pay Flow Component   

Chargent has an easy to configure and use flow component that you can place into any flow to allow a customer to easily pay using chargent.

