from croniter import croniter
from datetime import datetime
import pytz
import boto3

def convert_and_get_aws_cron_expression(schedule_expression, rule_name):
    # Parse the input schedule expression
    cron = croniter(schedule_expression)

    # Get the next occurrence of the schedule
    next_schedule_utc = cron.get_next(datetime)

    # Convert the next schedule to UTC
    next_schedule_utc = pytz.utc.localize(next_schedule_utc)

    # Extract minute and hour components
    minute = next_schedule_utc.minute
    hour = next_schedule_utc.hour

    # Extract days of the week from the schedule_expression
    days_of_week = cron.exdates[0].weekday()

    # Build the cron expression
    cron_expression = f"cron({minute} {hour} ? * {days_of_week+1} *)"

    # Update the rule in AWS EventBridge
    # client = boto3.client('events')
    # response = client.put_rule(
    #     Name=rule_name,
    #     ScheduleExpression=cron_expression
    # )

    return cron_expression

# Example usage
schedule_expression = "9 2 * * MON,FRI"
rule_name = "your-rule-name"
resulting_cron_expression = convert_and_get_aws_cron_expression(schedule_expression, rule_name)
print(resulting_cron_expression)
