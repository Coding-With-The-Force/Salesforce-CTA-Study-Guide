### What is Multi-Currency

Multi-Currency is a way in SF to allow you to have multiple currencies for your products with their various exchange rates. However it is important to note a few things:

1) The exchange rates are static, they are not updated when the rates actually change in real time. You must manually change them (which is awful cause exchange rates change multiple times per day, but this is not really important for the CTA exam).  

2) If you alter an exchange rate without advanced multi-currency enabled, it updates the exchange rates/values for every currency field regardless of whether an opp or quote is closed. So MAKE SURE to use advanced multi-currency if you don't want that to happen and you want to leverage dated exchange rates.

3) Advanced Multi-Currency ONLY works on Opportunities and their related objects (Opp Prods, Opp Prod Sched, Opp Splits) and NOTHING else! So if you needed dated exchange rates on Orders, Quotes, etc you need a custom solution. Additionally dated exchange rates are not considered in forecasts.

### Basic Setup Info for Multi-Currency  

To enable multi-currency you need to do the following steps:  

1) Setup -> Company Information -> Edit Button -> Check the "Activate Multi-Currency" checkbox.  
2) After multi-curr is enabled go to Setup -> Manage Currency to add currencies, enabled advanced multi-currency, etc  

