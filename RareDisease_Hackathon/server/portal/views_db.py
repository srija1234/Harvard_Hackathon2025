from django.http import HttpRequest, HttpResponse, HttpResponseBadRequest, JsonResponse
from django.shortcuts import get_object_or_404, redirect
from django.utils import timezone
from django.utils.version import get_docs_version
from django.http import HttpResponseNotFound
from .models import Appointment, Patient, Investigator, DailyCheckin, PatientTrialLookup, Update, ClinicalTrial
from datetime import datetime
from django.utils.timezone import make_aware
from django.urls import reverse



from . import forms, models, templates


def loginPatient(request):
    try:
        Patient.objects.get(id = 1)
        redirect("/patient")
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()

def loginInvestigator(request):
    try:
        Investigator.objects.get(id = 1)
        redirect("/investigator")
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
#/ def logout(request):
   #/ request.session.clear()
    #/return redirect('loginMain')

def registerPatient(request):
    try:
        Patient.objects.create(
            Email_Add = "person@testpatient.com",
            Password = "TestPassword!",
            First_Name = "Test",
            Last_Name = "Patient",
            Other_Med = "none",
            Insurance = "Insurance",
            Age = 13,
            Milestones = "milestones",
            Phone_Number = "1234567890"
        )
        return HttpResponse(status=200)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()

def registerInvestigator(request):
    try:
        Investigator.objects.create(
            Email_Add = "person@testpatient.com",
            Password = "TestPassword!",
            First_Name = "Test",
            Last_Name = "Patient",
            Phone_Number = "1234567890"
        )
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    

def submitCheckin(request):
    try:
        DailyCheckin.objects.create(
            Mood = 3,
            Mood_Better_Than_Yesterday = True,
            Symptom1 = True,
            Symptom2 = True,
            Symptom3 = True,
            Adverse_Events = "event"
        )
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def getCheckins(request):
    try:
        return JsonResponse(
            list(DailyCheckin.objects.all().values()),
            safe = False)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    

    
def registerPatientTrial(request):
    try:
        PatientTrialLookup.objects.create(
            Patient = Patient.objects.get(id = 1),
            Trial = ClinicalTrial.objects.get(id = 1),
            Dose = "50mg",
            Delivery_Status = "Delivered"
        )
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def postUpdate(request):
    try:
        Update.objects.create(
            Patient_Trial = PatientTrialLookup.objects.get(id = 1),
            Message = "whatever"
        )
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def getUpdates(request):
    try:
        return JsonResponse(
            list(Update.objects.all().values()),
            safe = False)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def postAppointment(request):
    try:
        Appointment.objects.create(
            Patient_Trial = PatientTrialLookup.objects.get(id = 1),
            Date = make_aware(datetime(2025, 3, 5, 10, 30)),
            Comments = "Great work!!",
        )
        return HttpResponse(status=200)

    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def getAppointments(request):
    try:
        return JsonResponse(
            list(Appointment.objects.all().values()),
            safe = False)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()
    
def getTrials(request):
    try:
        return JsonResponse(
            list(ClinicalTrial.objects.all().values()),
            safe = False)
    except Exception as e:
        print(e)
        return HttpResponseBadRequest()