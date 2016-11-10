# Infrastructure-as-code Lab
###Why?
*Learn. Code. Fun.*
This is an opprotunity to really go for it and see what it takes to implement an environmemnt that removes humans from the equation. This should lead to a very automated lab that ends with known good states for every aspect to it. It also means that when anychange is made to the lab it will be done via source controlled config files or code.
While not true Devops/Extreme/Lean/etc this should also give us an ability to get a feel for working in an agile style format (managing WIP, etc). 

___
## Principles
* measure everything
* log everything
* automate everyting
* monitor everything
* source controll everything
___
What does this mean? It means that everything in or out of the lab, physical or otherwise will be controlled. Minimal effort should be required for users standing up servers or appliances. Initial needs will be choosing and implementing tools to accomplish this end to end. Below are the guiderails for tools we will use. There will be an inital load to stand up tools outside of the Infrastructure-as-code mantra with the intent that each tool will be brought into it once complete. Everystep of the way we should strive to build out as dynamically as possible, by this I mean that if our NTP server address changes we should be able to change that in one location and it will propogate through the environment. In simple terms, avoid hardcoding at all cost. Building out dynamically also means that as service can faulter but I should be able to "re-deploy" to a known good state. We could decide to implement this in an extreme fashion where we decide on a container delivery system to "rebuild" the service when config changes are created. While I would love to implement a TDD style methodology here, I believe this would hinder our efforts far to much, rendering this concept DOA. If this were our full time jobs I might suggest otherwise. Effectively, when this is complete, we will have a complete pipeline for our infrastructure. The tools will not just be managing/monitoring the things we build above and beyond this, but they will manage the tools as well!

___
## Guardrails
* API in and API out
  * GUI's are fine, but I must be able to access to the tools progromatically
  * Prefer JSON native (rather than XML)
  * Prefer REST interfaces rather than SOAP or otherwise
* Opensource first
  * If at all possible, lets choose leading open source projects
  * Demopnstration of strong community support required
___
## Lead an effort, but help everywhere
This is a learning exercise to see what a SDDC really looks like. How do the different tools and appliances intertwine. What depends on what? This is meant to be an open conversation. Nothing should be done in a bubble. To help encourage bubble-less environments We will have a bi-weekly webex/video-conference to present current status's, ask for help, discuss interesting topics. There will also be time each meeting to demo a teams progress. This is how we learn different area's without doing. It is also opening up for full inspection and questions. I will work with teams to storyboard out highlevel objectives for each teams prohects so we can track outcomes that are important as well as features that would be nice to have.

___
## Tools for the tools!
* I am making a quick executiove decision to use Pivotal Tracker for storyboarding and over all progress of this effort.
* Slack will be the primary conversation point to collaborate, lets do a room for each teams tool in the underground team (Really don't want yet another team to keep track of.

___
##High level dependancy list
1. Switch
2. Initail Server w/ESXi
3. RackHD
4. CM tool
  
*then the rest*

* Repo
* CI/CD
* Measure
* Logs
* Transport
* Backup
