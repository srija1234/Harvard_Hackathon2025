from django.urls import path

from . import views_db
from . import views_serving

urlpatterns = [
    # ---patient endpoints---
    # /registerPatient
    # /loginPatient
    # /logoutPatient

    # /submitCheckIn
    
    # ---investigator endpoints---
    # /registerInvestigator
    # /loginInvestigator
    # /logoutInvestigator
    
    # /createTrial
    # /postUpdate
    # /postAppointment
    # /deleteAppointment

    # /reports (if we have time)

    # common read endponts
    # /viewCheckIns
    # /viewTrial
    # /viewAppointments
    # /viewUpdates




    # path("", views.django_default, name="django_default"),
    # path("forms/", views.form_playground, name="form_playground"),
    # path("polls/", views.polls_index, name="polls_index"),
    # path("polls/<int:question_id>/", views.poll_detail, name="poll_detail"),
    # path("polls/<int:question_id>/update/", views.update_poll, name="update_poll"),
    # path("polls/<int:question_id>/vote/", views.vote, name="vote"),
    # path("polls/<int:question_id>/results/", views.results, name="results"),
    # path( 
    #     "polls/<int:question_id>/comments/", views.poll_comments, name="poll_comments"
    # ),
    # path("polls/create/", views.create_poll, name="create_poll"),
    path("", views_serving.home, name="Home"),
    path("register/", views_serving.register, name="Register"),
    path("login/", views_serving.login, name="Login"),
    path("patient/", views_serving.patient, name="Patient"),
    path("investigator/", views_serving.investigator, name="Investigator"),

    path("submitCheckin/", views_db.submitCheckin, name="SubmitCheckin"),
    path("getCheckins/", views_db.getCheckins, name="getCheckins"),

    path("postUpdate/", views_db.postUpdate, name="postUpdate"),
    path("getUpdates/", views_db.getUpdates, name="getUpdates"),
    path("registerPatientTrial/", views_db.registerPatientTrial, name="registerPatientTrial"),

    path("registerInvestigator/", views_db.registerInvestigator, name="registerInvestigator"),
    path("registerPatient/", views_db.registerPatient, name="registerPatient"),

    path("loginInvestigator/", views_db.loginInvestigator, name="loginInvestigator"),
    path("loginPatient/", views_db.loginPatient, name="registerPatient"),

    path("postAppointment/", views_db.postAppointment, name="postAppointment"),
    path("getAppointments/", views_db.getAppointments, name="getAppointments"),

    path("getTrials/", views_db.getTrials, name="getTrials"),
    

    # path("register/", views_serving.register, name="Register"),
    # path("test2/", views_test.test2, name="Test2"),
    # path("registerInvestigator", views_db.registerInvestigator, name="registerInvestigator")
]
