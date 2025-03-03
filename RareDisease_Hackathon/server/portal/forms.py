from typing import Any, Dict

from django import forms
from reactivated.forms import ModelFormSetFactory

from . import models

class LoginPatient(forms.Form):
    Email_Add = forms.CharField(max_length=150, widget=forms.TextInput(attrs={'class': 'form-control'}))
    Password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

class LoginInvestigator(forms.Form):
    Email_Add = forms.CharField(max_length=150, widget=forms.TextInput(attrs={'class': 'form-control'}))
    Password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

class RegisterPatient(forms.Form):
    class Meta:
        model = models.Patient
        fields = ["First_Name", "Last_Name", "Email_Add", "Password", "Other_Med", "Insurance", "Age", "Milestones", "Phone_Number"]

class RegisterInvestigator(forms.Form):
    class Meta:
        model = models.Investigator
        fields = ["First_Name", "Last_Name", "Email_Add", "Password", "Phone_Number"]

class DailyCheckin(forms.Form):
    Mood = forms.IntegerField(widget=forms.NumberInput(attrs={'type':'range', 'step': '1', 'min': '1', 'max': '5'}))
    Mood_Better_Than_Yesterday = forms.BooleanField()
    Symptom1 = forms.BooleanField()
    Symptom2 = forms.BooleanField()
    Symptom3 = forms.BooleanField()

    Adverse_Events = forms.CharField(max_length=500)

class Update(forms.Form):
    class Meta:
        model = models.Update
        fields = ["Patient", "Message", "Date"]

class Appointment(forms.Form):
    class Meta:
        model = models.Appointment
        fields = ["Patient", "Comment", "Date"]


class ExampleForm(forms.Form):
    char_field = forms.CharField()
    integer_field = forms.IntegerField(help_text="Help for integer field")
    date_field = forms.DateField(widget=forms.SelectDateWidget(years=[2000, 2001]))
    date_time_field = forms.SplitDateTimeField(
        widget=forms.SplitDateTimeWidget,
    )
    choice_field = forms.ChoiceField(
        choices=(
            (1, "One"),
            (2, "Two"),
        )
    )
    boolean_field = forms.BooleanField()
    hidden_field = forms.CharField(widget=forms.HiddenInput)

    def clean(self) -> Dict[str, Any]:
        raise forms.ValidationError(
            "Non-field error",
        )


# class Poll(forms.ModelForm[models.Question]):
#     class Meta:
#         model = models.Question
#         fields = ["question_text"]


# class Choice(forms.ModelForm[models.Choice]):
#     class Meta:
#         model = models.Choice
#         fields = ["choice_text", "votes"]


# class ChoiceFormSet(ModelFormSetFactory[models.Choice, Choice]):
#     extra = 0
#     min_num = 2
#     validate_min = True


# class Comment(forms.ModelForm[models.Comment]):
#     class Meta:
#         model = models.Comment
#         fields = ["comment_text"]
