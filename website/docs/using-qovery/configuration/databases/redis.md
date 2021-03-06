---
last_modified_on: "2021-02-10"
title: Redis
description: "How to set up and use a Redis database"
---

import Alert from '@site/src/components/Alert';

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/databases/redis.md.erb
-->

## Add a Redis database to your application

To add a dedicated Redis instance to your existing application, simply add these lines to your configuration file:

```yml title=".qovery.yml" {4-6}
application:
...
databases:
- type: redis
  version: 6
  name: my-redis
```

- name: select a name for your database
- version: choose the version of the database
- type: the database engine (redis in this case)

## Supported versions

Here are the Redis versions supported by Qovery.

|Version|Supported|
|---------|-------|
|6|Yes|
|5|Yes|


Qovery does not support a new version of Redis yet? [Contact us][urls.qovery_chat]

## Get access to your Redis database

To get the connection information of your database, you can use the CLI:

```bash
qovery application env list -c
```

```plain title="OUTPUT"
$ qovery application env list -c
  SCOPE       | KEY                                                           | VALUE
--------------+---------------------------------------------------------------+-----------
  BUILT_IN    | QOVERY_BRANCH_NAME                                            | master
  BUILT_IN    | QOVERY_IS_PRODUCTION                                          | true
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_NAME                               | my-redis
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_TYPE                               | redis
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_VERSION                            | 6
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_CONNECTION_URI                     | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_HOST                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_FQDN                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_PORT                               | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_USERNAME                           | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_PASSWORD                           | <hidden>
  BUILT_IN    | QOVERY_DATABASE_MY_REDIS_DATABASE                           | redis
```

In the output, you get all data you need to use the database. Those environment variables are available in the runtime of your application.

## Show Redis database status

To know more about your database status, run:

```bash
qovery status -c
```

```plain title="OUTPUT"
DATABASE NAME | STATUS  | TYPE    | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS
----------------+---------+---------+---------+----------+----------+----------+----------+-----------------
  my-mongo      | running | redis | 6     | <hidden> | <hidden> | <hidden> | <hidden> | simple-example
```

## Delete your Redis database

To delete a database, you have to:
- Remove it from the configuration file, commit and push.
- Delete it manually (for security purpose) through the [Qovery web interface][urls.start_qovery].

<Alert type="danger">

Delete action drops the service and its data!

</Alert>

<Alert type="info">

Backups from production environments are kept for 1 month if you need to recover.

</Alert>

## Redis backup

Daily backups for your Redis database are automatically done for [Production environments][docs.using-qovery.configuration.business.policy#environment-mode].


[docs.using-qovery.configuration.business.policy#environment-mode]: /docs/using-qovery/configuration/business/policy/#environment-mode
[urls.qovery_chat]: https://discord.qovery.com
[urls.start_qovery]: https://start.qovery.com
