# in-orbit
### A simple application about tasks where it is possible to schedule and mark them as completed

---

# API Documentation

Here the "{{apiUrl}}" is your API base url.

---

## Endpoints

### 1. Create Goal

- **Method:** `POST`
- **URL:** `/goals`

#### Request Body (JSON)

```json
{
    "title": "Grind",
    "desiredWeeklyFrequency": 7
}
```

#### Example cURL

```bash
curl --request POST \
  --url {{apiUrl}}/goals \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "Grind",
    "desiredWeeklyFrequency": 7
}'
```

#### Description

This endpoint creates a new goal. You must provide a title and a desired weekly frequency for the goal.

---

### 2. Create Goal Completion

- **Method:** `POST`
- **URL:** `/completions`

#### Request Body (JSON)

```json
{
    "goalId": "uh7fzh6u8jeir280v0pschgx"
}
```

#### Example cURL

```bash
curl --request POST \
  --url {{apiUrl}}/completions \
  --header 'Content-Type: application/json' \
  --data '{
    "goalId": "uh7fzh6u8jeir280v0pschgx"
}'
```

#### Description

This endpoint marks a goal as completed by providing the `goalId`.

---

### 3. Get Week Pending Goals

- **Method:** `GET`
- **URL:** `/pending-goals`

#### Example cURL

```bash
curl --request GET \
  --url {{apiUrl}}/pending-goals
```

#### Description

This endpoint retrieves all goals that are pending completion for the current week.

---

### 4. Get Week Summary

- **Method:** `GET`
- **URL:** `/summary`

#### Example cURL

```bash
curl --request GET \
  --url {{apiUrl}}/summary
```

#### Description

This endpoint returns a summary of the week with the number of completed goals, total goals to complete and goals separated by days.
