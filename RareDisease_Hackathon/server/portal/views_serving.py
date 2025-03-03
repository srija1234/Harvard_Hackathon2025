from django.http import HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.utils import timezone
from django.utils.version import get_docs_version

from . import forms, models, templates

def django_default(request: HttpRequest) -> HttpResponse:
    return templates.DjangoDefault(version=get_docs_version()).render(request)

# home
# login
# register
# patientportal
# investigatorportal

def home(request):
    return render(request, 'index.html')

def login(request):
    form_patient = forms.LoginPatient()
    form_investigator = forms.LoginInvestigator()

    return templates.Login(
        form_investigator = form_investigator,
        form_patient = form_patient
    ).render(request)

def register(request):
    form_patient = forms.RegisterPatient()
    form_investigator = forms.RegisterInvestigator()

    return templates.Register(
        form_investigator = form_investigator,
        form_patient = form_patient
    ).render(request)

def patient(request):
    dailycheckin = forms.DailyCheckin()

    return templates.PortalPatient(
        dailycheckin = dailycheckin
    ).render(request)

def investigator(request):
    appointment = forms.Appointment()
    update = forms.Update()

    return templates.PortalInvestigator(
        appointment = appointment,
        update = update
    ).render(request)

def loginMain(request):
    return render(request, 'NULL.html')

def home(request) -> HttpResponse:
    return templates.Home(Test = "").render(request)