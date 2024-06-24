design connectivity
frontend connection

![alt text](../public/img/posts/azure/image.png)

## Goverance

pim - prevalage identity managment

users can raise request to create vm but need approver approve

![alt text](../public/img/posts/azure/image-1.png)

default management group always available

location base / team base / env based management group

subcloud subscription 

common to have multiple subscription - good practise

separate requirement

vm plans (cpu counts) different in different subscription policy / compliance policy

each env 2 subscription

compliance setting (azure policy) at resource group, sometime resource group, not tenant group

ensure backup by policy (azure policy)

![alt text](../public/img/posts/azure/image-2.png)

![alt text](../public/img/posts/azure/image-3.png)

^ no applying to real life, too complicated

not so common: every product has their own subscription.

control every product has what resource

common: two subscriptions - prod, dev

## Azure policy RBAC

policy go resource group level better than subscription level

what policy available?

- location (allowed location and allowed location for resource group are the same)

can select which kind of resource that has effect, like vm and db, then vpn/network/etc are not affected

5-15 minutes for policy to take effect.

cost related policy

plan restriction

naming convention policy - there is no such thing

tags is very useful - search for resource usage etc

## Landing zone

![alt text](../public/img/posts/azure/image-4.png)

cloud adoption framework well our framework

## M2 - VM

![alt text](../public/img/posts/azure/image-5.png)

premium for db hosts

standard for web servers

check the IOPS

## Batch account

control scaling of machines

try to finish task as soon as possible

![alt text](../public/img/posts/azure/image-6.png)


