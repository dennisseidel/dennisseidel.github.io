---
id: resilience
title: PLAN: Reslience
---

- Recilience requirements in the cloud due to retries and network availability. Google suggest the following [best pratices on retries](https://cloud.google.com/functions/docs/bestpractices/retries)and [general tips](https://cloud.google.com/functions/docs/bestpractices/tips):
  - Use retry to handle transient errors
  - Set an end condition to avoid infinite retry loops
  - Distinguish between retriable and fatal errors
  - Write idempotent functions (Especially make retryable background functions idempotent)
  - Ensure HTTP functions send an HTTP response
  - Do not start background activities
  - Always delete temporary files
  - Use dependencies wisely
  - Use global variables to reuse objects in future invocations
  - Do lazy initialization of global variables

- AWS lambda tips for idempotency [here](https://cloudonaut.io/your-lambda-function-might-execute-twice-deal-with-it/)