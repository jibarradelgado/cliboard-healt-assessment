# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Task 1: Update database by adding column "facilitiesId" on table Agents
  This new field should be unique
  This field should be a String
  This field should not be null
  The default value for the existing agents' records should be their database Id
  Time estimate: this task should be done in one day
  Priority: High, since we need this task done to work on integration tests with UI and backend. 

Task2: Update the Agents create and update form with a new field "Facilities Id" in the UI.
  The field should validate to be unique
  This field should accept a String of Maximum 12 characters
  Time estimate: this task should be done in maximum two days
  Priority: Medium, once this feature is done, Facilities can work on updating the Ids according to their standards

Task 3: Update getShiftsByFacility function in order to include the new "facilitiesId" in the Agent metadata.
  The data's key will be facilitiesId 
  Time estimate: this task should be done in maximum one day
  Priority: Low

Task 4: Create a function generateReportWithAgentId and replace generateReport with it.
  This function will be similar to generateReport and will be used instead of it. We'll keep generateReport in case of a rollback.
  The difference with generateReport is that we are going to show the Agents' Id using the new facilitiesId in the report. 
  Time estimate: this task should be done in maximum one day
  Priority: Low

Priorities and plan: 
  We need to give higher priority to Task 1, since dependability on testing and integration of other tasks depend on it.
  Task 2 should be done next. By releasing this feature, Facilities can start working on updating existing Agents and adding new ones with their own facilitiesId.
  Task 3 could be done at the same time Task 2 is in progress since the are no dependencies between them. However Task 4 depends on Task 3 because the list of shifts needs the updated Agents' metadata.