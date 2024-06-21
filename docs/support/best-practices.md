---
title: Managed Services Operation Practices
sidebar_position: 1
sidebar_label: Managed Services Operation Practices
last_update:
  date: 06/21/2024
  author: Cleyton Nogueira

---

This document outlines the definitions and criteria for priority and severity levels used Managed Services support cases. The objective is to ensure a consistent and clear understanding of how cases are categorised, which in turn helps in managing and resolving issues efficiently.

# **Incident Management Process**

Incident Management is a key component of IT Service Management (ITSM) that focuses on restoring normal service operations as quickly as possible and minimising the impact on business operations.

# **Prioritisation**
Incidents will be prioritised based on the Impact vs. Urgency matrix, as defined in the ITIL framework. The matrix will consist of various priority levels, ranging from P1 (highest priority) to P4 (lowest priority), determined by the combination of Impact and Urgency.

Impact: Refers to the extent of disruption or potential damage caused by the incident. This includes consideration of affected systems, services, and users.

Urgency: Indicates the time sensitivity of the incident resolution, taking into account factors such as business criticality, user needs, and time constraints.

All incidents or requests issued by the customer as tickets shall be assigned a priority level by the customer during ticket opening to determine the urgency/impact and upon receipt of the ticket, the assigned engineer will reassess the priority.

# 1. Identification and Logging
  Identification: Incidents can be reported by customers, detected by monitoring tools, or proactively identified by the Managed Services team..
  Logging: All incidents are logged in on Freshdesk with relevant details like date, time, description, and reporter's contact information.

# 2. Categorisation and Prioritization
  Categorisation: Incidents are categorised based on the affected service, type of issue, etc.
  Prioritisation: Incidents are prioritised based on their urgency and impact on business operations. This helps in determining the order in which incidents should be addressed.

# 3. Initial Diagnosis
  Initial Assessment: An initial diagnosis is performed to understand the issue. 

# 4. Assignment
  Incident Assignment: Incidents are assigned to the appropriate support level/engineer based on categorisation and prioritisation.

# 5. Investigation and Diagnosis
  In-depth Analysis: The assigned support team/engineer conducts a detailed investigation to diagnose the cause of the incident.
  Workarounds: Temporary solutions or workarounds may be provided to restore services while the permanent fix is being developed.

# 6. Resolution and Recovery
  Resolution: The cause is addressed, and the incident is resolved.
  Recovery: Services are restored to normal operation, and the resolution is tested to ensure the issue is fully resolved.

# 7. Closure
  Closure Confirmation: The customer or the incident reporter confirms that the incident is resolved.
  Documentation: All relevant details of the incident, including actions taken and lessons learned, are documented.
  Closure: The incident is formally closed on Freshdesk.

# 8. Review and Continuous Improvement
  Incident Review: Major incidents are reviewed to understand what went wrong and how similar incidents can be prevented in the future.
  Process Improvement: Insights from incident reviews are used to improve the incident management process and related procedures.

# **Priority Levels**
  Priority 1 - Urgent: 
    Impact: Application down (production only)
    Description: The client’s application is not available to users.  Major business impact. Applied only for Production Incidents.

  Priority 2 - High:
    Impact: Business-critical with severe restrictions (production only)
    Description: Major disruptions or degradation of service to users. High business impact. Applied only for Production Incidents.

  Priority 3 - Medium:
    Impact: Non-critical application functionality restrictions
    Description: Non-critical application service not functioning properly due to minor errors but is available and can be worked around. Low business impact. Applied for Production and Non-Production Incidents and Requests.

  Priority 4 - Low:
    Impact: Ad-hoc issues or requests
    Description: Little or no impact on the business. Applied for Requests and Inquiries.

![Image](/assets/images/priority_matrix.png)

# **Service Level Agreement (SLA)**   

SLA is the agreed level of service provided by a DNX Statement of Work, based on the Response Time and a Resolution Time for each ticket based on the severity of the ticket.

Response Time: from Ticket Opening to Acknowledgement by the DNX Team (Excluding Non-Business hours).

Resolution Time: from Ticket Acknowledgement and the Incident Normalisation (or the Incident Cause Identification in cases where the incident cause is out of DNX scope), excluding any time DNX is blocked by lack of information, actions performed by the customer during the investigation, failures on third-party resources or cloud resources unavailabilities.

Interpretations:

Incident Normalisation: Restoring the normal service operation, minimising the negative impact of an incident.

Incident Cause Identification: During the investigation process, the first step is to determine what is causing the incident and then execute steps towards normalisation. DNX will identify the cause or at least narrow down the possible causes for the customer to continue resolution.

Best Effort: As the resolution or normalisation of an incident can be dependable on many factors, several of them out of DNX Managed Services scope and reach, such as application issues, networking infrastructure, integrated services outages, and so on, DNX will apply their best effort to investigate and identify a corrective action inside the SLO, escalating any deviation as soon identified.     
          
# **Severity Levels**
  Severity: P1 - Urgent
    Response Time: 30 Minutes
    Resolution Time: 4 Hours

  Severity: P2 - High
    Response Time: 2 Hours
    Resolution Time: 8 Hours

  Severity: P3 - Medium
    Response Time: 8 Hours
    Resolution Time: 7 Days

  Severity: P4 - Low
    Response Time: 16Hours
    Resolution Time: 14 Days 

![Image](/assets/images/Severity_Matrix.png) 

# **Escalation Process**
  Automatic Escalation: If an incident is not resolved within the defined resolution time, it is automatically escalated to the next support level.
  Manual Escalation: Managed Services engineer can manually escalate an incident if they believe it requires urgent attention or higher expertise.

# **Monitoring and Reporting**
  Incident Tracking: All incidents are tracked on Freshdesk.
  Performance Metrics: Regular reports are generated to monitor response times, resolution times, and customer satisfaction.
  Continuous Improvement: Feedback from customers and performance data are used to identify areas for improvement in support processes.

# **User Communication**
  Initial Acknowledgment: Customers receive an acknowledgment when an incident is logged.
  Status Updates: Regular updates are provided to customers on the status of their incidents.
  Resolution Confirmation: Customers are notified when their incident is resolved and are asked to confirm resolution.
