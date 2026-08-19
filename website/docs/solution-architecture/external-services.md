---
title: "External Services"
---

### What are External Services  

They are a declarative way to integrate with a REST API using OpenAPI standards (no apex involved), but your endpoint must be able to output a schema in JSON format (swagger schema for instance). If your endpoint cannot output a schema in a JSON format and is not a REST endpoint, this will not work.  

After setting up an external service you can use them within flows to integrate with external systems declaratively.   

***

### How to Setup External Services  

You need to do the following:

1) Makes sure you have an accessible OpenAPI definition (schema file) available for your REST API.  

2) Configure a named credential to authenticate to the REST endpoint resource server.  

3) Register/Create an external service for your REST endpoint.  

4) Setup a flow with an Apex Action that leverages your external service.  

5) Run your flow.

NOTE: If you put this in a record triggered flow or a scheduled action this will not work, as callouts via external services abide by the same limitations as callouts via apex. You can add an async path in your record triggered flow to do the external service call after the transaction has ended however. You can also setup an Apex class with an invocable action that calls an async method, that async method can access your registered external service to simplify its integration still.

***

### When to use External Services   

You should use them when you have a simple operation that can be done via a flow, and a REST endpoint that can generate JSON formatted OpenAPI definition file. 