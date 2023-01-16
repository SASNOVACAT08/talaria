# Send

In this section, you will learn how to send your email.

## Step. 1: How to send

After building your email, you need to send it.

In your project, you have a talaria.config.json file. This file is the configuration file of your project. You can configure your email and send it.

```json
{
  "send": {
    "service": "gmail",
    "auth": {
      "user": "username",
      "pass": "password"
    }
  }
}
```

Replace `username` and `password` with your credentials. [See more](https://nodemailer.com/smtp/well-known/)

## Step. 2: Send your email

To send your email, you need to run the following command:

```sh
$ talaria send <email-path> <email>
```

This command will send your email.
