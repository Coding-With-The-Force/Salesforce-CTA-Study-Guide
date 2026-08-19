---
title: "Networking Basics"
---

### What is a LAN?  

A LAN is a local area network, a network that can talk to each other within a limited range. A good example is your home network (devices in your actual house) or a school. 

***

### What is a WAN?  

WAN (wide area network) is essentially the internet

***

### What is an IP Address?

It's a 32bit numeric identifier for a computer or a device on a network (ex: 192.168.1.4). Part of the IP indicate the network the device is on, and part of the ip indicates the host device. Which numbers in the ip are network or host related are determined by the subnet mask. If a subnet mask is 255.255.255.0 and an IP address is 192.168.1.4 then the numbers 192, 168, and 1 indicate the network address, the number 4 indicates the host address of the ip. There is a network portion and a host portion to an IP address so that you can break large networks of computers (say at an office) into smaller networks of computers (subnets) and utilize routers to intelligently communicate between each subnet.

***

### What is a Subnet

Subnets are divisions of your LAN, which are separated by a router on your LAN. It helps manage traffic for large organizations.

***

### What is a Firewall?    

Firewalls are a set of rules defined to set communications between your internal network and an external network. It's a safety barrier between a private network and the public internet.

There are two types of firewalls, software firewalls that protect ONLY the computer the software is on, and a network based firewall which is a combination of hardware and software that sits in front of a router (or within the router for smaller organizations) to prevent malicious connections to machines on your company network.

***

### What is a DMZ?

DMZ's (Demilitarized Zones) are subnetworks that expose devices to untrusted networks. If you want to expose a specific device/server/resource to the internet, without exposing your entire LAN, you would setup a DMZ and designate that device to be accessible via the DMZ.  

Typically when you setup a DMZ you setup 2 firewalls, an external firewall in front of your DMZ and an internal one behind your DMZ.

***

### What is a Forward Proxy Server?  

This is a server that retrieves data on the internet on behalf of a user. Proxy servers have several benefits listed below:

1) It hides your machines IP address because the proxy is making the request to the webpage so the webpage only sees the proxy servers IP address.  
2) Can improve webpage retrieval as the proxy server will cache webpages meaning subsequent requests are very fast.  
3) Proxy servers can also log company employee activity/web page history.  
4) It can block you from visiting certain webpages. 

Proxy Servers typically live within the DMZ, in front of the internal LAN firewall and behind the external firewall.  

***

### What is a Reverse Proxy Server  

This is a server that retrieves data on your LAN for users on the internet. It typically sits in your DMZ and listens for legitimate requests to access data on your servers that likely also reside in your DMZ.  

This provides the following security:

1) It hides your resource servers (the resources people on the internet are requesting info from) IP addresses and only exposes the IP of your reverse proxy. Making DDoS attacks challenging to accomplish.  
2) Reverse proxies can handle load balancing when you have a huge amount of users.   
3) It caches static content so it can quickly return data.    

Proxy Servers typically live within the DMZ, in front of the internal LAN firewall and behind the external firewall.  

***

### Example Networking Setup  

![Networking Setup](/img/CTA_Repo_Images/Proxies.png)  

***

### Additional Notes  

Great Networking Tutorials can be found here: [Power Cert Animated Videos](https://www.youtube.com/@PowerCertAnimatedVideos)  
A great video on reverse proxies can be found here: [Byte Byte Go Proxy Servers](https://www.youtube.com/watch?v=4NB0NDtOwIQ)
