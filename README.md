# task-board
An app for tracking and assigning tasks. This project is a solution to a workflow issue. 

Current: 
1. Issue reported by phone/email.
2. Ticket created in company software system.
3. Email is self sent (dispatch email group) describing issue with ticket #.
4. A paper ticket is created and put on a physical board.
<br><br>This approach leaves a huge margin of error by having 3 separate systems with no communication with one another (email, software, board) where a dispatcher acts as an intermediary. This costs the company in lost productivity, turnover, and negative customer experience.

Solution:
1. Issue reported by phone/email.
2. Ticket created in company software system.
3. Details are entered into task-board system via a validated form.
4. task-board sends formatted email for tracking.
<br><br>task-board replaces the physical ticket board entirely by providing not only a visual representation, but validation and tracking. This approach eliminates most room for human error and increases dispatcher efficiency. The familiar workflow and appearance encourages user acceptance. 

---

Minimum Viable Product:
- Dispatcher view with backlog, technicians ("workers"), and task queue per worker.
- Tickets ("tasks") that can be created, assigned, updated, and completed. These must contain all information necessary to accurately track work. 
- A form is used to create all tasks. This must validate input and be easier to use. Tasks are automatically placed in the backlog and are assigned from there. The backlog is sorted by severity > date.
- Outlook integration that can send tasks as emails for tracking, dispatch, and calendar tracking. Most of the value lies here as the project cannot streamline the workflow without these features.

---

## Code Louisville
- [x] 2 media queries
- [x] mobile first
- [x] 5 commits using CLI
- [x] README.md
#### Features
- [x] Flexbox
- [x] nth-child
- [x] Show/hide function
- [x] Pop up form
- [ ] JSON ticket data (everything is hard HTML right now) 
