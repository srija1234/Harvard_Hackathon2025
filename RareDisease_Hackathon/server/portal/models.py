from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
import datetime

class CustomUser(AbstractUser):
    USER_TYPES = (
        ('investigator', 'Investigator'),
        ('patient', 'Patient'),
    )
    user_type = models.CharField(max_length=20, choices=USER_TYPES)
    groups = models.ManyToManyField(
        Group,
        related_name="customuser_set",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_permissions_set",
        blank=True
    )

    def is_investigator(self):
        return self.user_type == 'investigator'

    def is_patient(self):
        return self.user_type == 'patient'
    
class Patient(models.Model):
    Password = models.CharField(max_length=200, verbose_name="Password")
    First_Name = models.CharField(max_length=200, verbose_name="First Name")
    Last_Name = models.CharField(max_length=200, verbose_name="Last Name")
    Email_Add = models.EmailField(max_length=200, verbose_name="Email Address")
    Other_Med = models.CharField(max_length=200, verbose_name="Current Medications")
    Insurance = models.CharField(max_length=200, verbose_name="Insurance Provider")
    Age = models.IntegerField(verbose_name="Age")
    Milestones = models.CharField(max_length=500, verbose_name="Developmental Milestones")
    Phone_Number = models.CharField(max_length=15, verbose_name="Phone Number")

    class Meta:
        db_table = "Patient"

    def __str__(self):
        return f"{self.First_Name} {self.Last_Name}"

class Investigator(models.Model):
    Email_Add = models.EmailField(max_length=200, verbose_name="Investigator Email Address")
    First_Name = models.CharField(max_length=200, verbose_name="Investigator First Name")
    Last_Name = models.CharField(max_length=200, verbose_name="Investigator Last Name")
    Password = models.CharField(max_length=200, verbose_name="Password")
    Phone_Number = models.CharField(max_length=15, verbose_name="Phone Number")

    class Meta:
        db_table = "Investigator"

    def __str__(self):
        return f"{self.First_Name} {self.Last_Name}"
    
    class Meta:
        db_table = "Investigator"

class ClinicalTrial(models.Model):
    Trial_Name = models.CharField(max_length=200, verbose_name="Trial Name")
    Rare_Disease = models.CharField(max_length=200, verbose_name="Rare Disease")
    Trial_Location = models.CharField(max_length=200, verbose_name="Trial Location")
    Treatment_Name = models.CharField(max_length=200, verbose_name="Treatment Name")
    Trial_Phase = models.IntegerField(verbose_name="Trial Phase")
    Trial_Contact = models.CharField(max_length=200, verbose_name="Trial Contact")
    Company_Name = models.CharField(max_length=200, verbose_name="Company Name")
    Trial_Status = models.CharField(
        max_length=50,
        choices=[
            ('Not yet recruiting', 'Not yet recruiting'),
            ('Recruiting', 'Recruiting'),
            ('Enrolling by invitation', 'Enrolling by invitation'),
            ('Active, not recruiting', 'Active, not recruiting'),
            ('Suspended', 'Suspended'),
            ('Terminated', 'Terminated'),
            ('Completed', 'Completed'),
            ('Withdrawn', 'Withdrawn'),
            ('Unknown', 'Unknown'),
        ],
        default='Unknown',
        verbose_name="Trial Status"
    )
    Investigator = models.ForeignKey(
        Investigator,  
        on_delete=models.CASCADE,  
        verbose_name="Investigator"
    )

    def __str__(self):
        return self.Trial_Name
    
    class Meta:
        db_table = "Clinical_Trial"

class DailyCheckin(models.Model):
    MOOD_CHOICES = [
        (1, 'Very Poor'),
        (2, 'Poor'),
        (3, 'Average'),
        (4, 'Good'),
        (5, 'Excellent'),
    ]

    YES_NO_CHOICES = [
        (True, 'Yes'),
        (False, 'No'),
    ]

    Mood = models.IntegerField(
        choices=MOOD_CHOICES, 
        verbose_name="How are you feeling today?", 
        default=3
    )
    Mood_Better_Than_Yesterday = models.BooleanField(
        choices=YES_NO_CHOICES, 
        verbose_name="Are you feeling better than yesterday?"
    )
    Symptom1 = models.BooleanField()
    Symptom2 = models.BooleanField()
    Symptom3 = models.BooleanField()

    #Symptom_Check = models.JSONField(verbose_name="Symptom Check Data")
    Adverse_Events = models.CharField(max_length=500, verbose_name="Any adverse reactions?")

    def __str__(self):
        return f"Check-in: Feeling better than yesterday? {'Yes' if self.Mood_Better_Than_Yes else 'No'}"
    
    class Meta:
        db_table = "Daily Check-In"

class PatientTrialLookup(models.Model):
    Patient = models.ForeignKey(
        Patient,  
        on_delete=models.CASCADE,  
        verbose_name="Patient"
    )
    Trial = models.ForeignKey(
        ClinicalTrial, 
        on_delete=models.CASCADE,  
        verbose_name="Clinical Trial"
    )
    Dose = models.CharField(max_length=200, verbose_name="Dose")
    Delivery_Status = models.CharField(max_length=20, verbose_name="Delivery Status")

    def __str__(self):
        return f"Patient {self.Patient.id} in Trial {self.Trial.id} - Status: {self.Delivery_Status}"
    
    class Meta:
        db_table = "Patient_Trial_Lookup"

class Appointment(models.Model):
    Patient_Trial = models.ForeignKey(
        PatientTrialLookup,  
        on_delete=models.CASCADE,  
        verbose_name="Patient"
    )
    Date = models.DateTimeField(verbose_name="Appointment date")
    Comments = models.CharField(max_length=200, verbose_name="Comments")

    def __str__(self):
        return f"Appointment for Patient {self.Patient.Patient.id} on {self.Date}"
    
    class Meta:
        db_table = "Appointment"

class Update(models.Model):
    Patient_Trial = models.ForeignKey(
        PatientTrialLookup,  
        on_delete=models.CASCADE,  
        verbose_name="Patient Trial Lookup"
    )
    Message = models.CharField(max_length=200, verbose_name="Message")
    Date = models.DateTimeField(verbose_name="Update date", default=datetime.datetime.now())

    def __str__(self):
        return f"Update for Patient {self.Patient.Patient.id} on {self.Date}"
    
    class Meta:
        db_table = "Update"
