---
title: Cases Best Practices
sidebar_position: 1
sidebar_label: Cases Best Practices
last_update:
  date: 7/01/2022
  author: Renato Tavares

---

### Prioritisation 

Incident, problem or change request will be prioritised based on the Impact vs. Urgency matrix, as defined in the ITIL framework.
The matrix will consist of various priority levels, ranging from P1 (highest priority) to P4 (lowest priority), determined by the combination of Impact and Urgency.

Impact: Refers to the extent of disruption or potential damage caused by the incident or problem. This includes consideration of affected systems, services, and users.

Urgency: Indicates the time sensitivity of the incident or problem resolution, taking into account factors such as business criticality, user needs, and time constraints.

All incidents, problems or requests  issued by the customer as tickets shall be assigned a priority level by the customer during ticket opening to determine the urgency/impact and upon receipt of the ticket, the assigned personnel will reassess the priority

![Image](/assets/images/priority-matrix.png)

Incidents, problems or change requests with high priority levels (e.g., P1 or P2) will trigger immediate escalation procedures to ensure timely resolution.
Response times and responsibilities for each priority level are defined to ensure efficient resource allocation and resolution.


Definition:
• Critical (Priority 1) – Serious interruptions to a production system  
• Urgent (Priority 2) – Serious interruptions to normal operations or impact on deadlines 
• Important (Priority 3) – Interruption but no impact on production operation 
• Minor (Priority 4) – Problem results in minimal or no interruptions to normal operations 


### Service Level Agreement (SLA)

SLA is the agreed level of service provided by a DNX Statement of Work, based on the Response Time and a Resolution Time for each ticket based on the severity of the ticket.

Response Time: from Ticket Opening to Acknowledgement by the DNX Team (Excluding Non-Business hours)

Resolution Time: from Ticket Acknowledgement and the Incident Normalisation (or the Incident Cause Identification in cases where the incident cause is out of DNX scope),  excluding any time DNX is blocked by lack of information, actions performed by the customer during the investigation, failures on third-party resources or cloud resources unavailabilities. 

Interpretations:

Incident Normalisation: Restoring the normal service operation, minimising the negative impact of an incident.

Incident Cause Identification: During the investigation process, the first step is to determine what is causing the incident and then execute steps towards normalisation. DNX will identify the cause or at least narrow down the possible causes for the customer to continue resolution. 

Best Effort: As the resolution or normalisation of an incident can be dependable on many factors, several of them out of DNX Managed Services scope and reach, such as application problems, networking infrastructure, integrated services outages, and so on, DNX will apply their best effort to investigate and identify a corrective action inside the SLO, escalating any deviation as soon identified.


![Image](/assets/images/priority-sla2.png)


