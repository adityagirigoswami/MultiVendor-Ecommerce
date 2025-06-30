import smtplib
from email.mime.text import MIMEText

sender_email = "your@gmail.com"
receiver_email = "receiver@example.com"
password = "yourpassword"

msg = MIMEText("Hello from Python!", "plain")
msg["Subject"] = "Test Email"
msg["From"] = sender_email
msg["To"] = receiver_email

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
    server.login(sender_email, password)
    server.send_message(msg)

print("✅ Email sent!")
