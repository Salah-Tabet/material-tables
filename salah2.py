from croniter import croniter
from datetime import datetime
import pytz
import boto3
def convert_day_to_aws_format(day):
    # Map day names to AWS EventBridge cron format
    day_mapping = {
        'MON': '2',
        'TUE': '3',
        'WED': '4',
        'THU': '5',
        'FRI': '6',
        'SAT': '7',
        'SUN': '1'
    }
    return day_mapping.get(day)
def convert_and_get_aws_cron_expression(schedule_expression, rule_name):
    # Parse the input schedule expression
    minute, hour, day, month, days_of_week = schedule_expression.split()

    # Convert days to AWS EventBridge cron format
    if days_of_week != "*" and not days_of_week.isdigit(): 
        aws_days_of_week = ','.join([convert_day_to_aws_format(day) for day in days_of_week.split(',')])
    else:
        if days_of_week == "0":
            aws_days_of_week = "*"
        else:
            aws_days_of_week = days_of_week
    print("&&&&&&&&&&=<> ", aws_days_of_week)
    

    # Get the next occurrence of the schedule
    cron = croniter(schedule_expression)
    next_schedule_utc = cron.get_next(datetime)

    # Convert the next schedule to UTC
    next_schedule_utc = pytz.utc.localize(next_schedule_utc)

    # Build the cron expression
    cron_expression = f"cron({minute} {hour} {day} ? {month} {aws_days_of_week} *)"

    # Update the rule in AWS EventBridge
    # client = boto3.client('events')
    # response = client.put_rule(
    #     Name=rule_name,
    #     ScheduleExpression=cron_expression
    # )

    return cron_expression

# Example usage
schedule_expression = "9 2 * * 2"
rule_name = "your-rule-name"
resulting_cron_expression = convert_and_get_aws_cron_expression(schedule_expression, rule_name)
print(resulting_cron_expression)