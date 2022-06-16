# Overview

Create a web page that adds and saves contacts.

## Instructions

1. App.js has not been structured correctly. This is deliberate. It's on you to move major components (Form / Table) to new folders. Also, its on you to check React Querry documentation for initial setup steps since some steps have been missed.
2. Move major components (Form and Table) to a new component.
3. The table should use `useQuery` to get the info.
4. The form should use `useMutation` to update the info.
5. Form should show a `Saving...` text whenever we're adding a new contact
6. Add button should become disabled whenever useMutation is loading.

json-server --watch db.json


BONUS: Find a way to delete a contact. A delete button should appear in front of the contact's row.
