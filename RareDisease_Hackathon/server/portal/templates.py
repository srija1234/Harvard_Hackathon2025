from typing import List, NamedTuple, Optional

from reactivated import Pick, template

from . import forms, models


@template
class DjangoDefault(NamedTuple):
    version: str

@template
class Home(NamedTuple):
    Test: str


# @template
# class PollsIndex(NamedTuple):
#     latest_question_list: List[Pick[models.Question, "id", "question_text"]]

# @template
# class mainLogin(NamedTuple):
#     patient_form: forms.LoginPatient
#     investigator_form: forms.LoginInvestigator

# @template
# class patientPortal(NamedTuple):


# @template
# class investigatorPortal(NamedTuple):

# @template
# class EditPoll(NamedTuple):
#     form: forms.Poll
#     choice_form_set: forms.ChoiceFormSet
#     existing_poll: Optional[Pick[models.Question, "id"]] = None

# @template
# class PollDetail(NamedTuple):
#     question: Pick[
#         models.Question,
#         "id",
#         "question_text",
#         "choices.id",
#         "choices.choice_text",
#     ]
#     error_message: Optional[str] = None


# @template
# class PollComments(NamedTuple):
#     question: Pick[models.Question, "id", "question_text", "comments.comment_text"]
#     form: forms.Comment


# @template
# class Results(NamedTuple):
#     question: Pick[
#         models.Question,
#         "id",
#         "question_text",
#         "choices.id",
#         "choices.choice_text",
#         "choices.votes",
#     ]


# @template
# class FormPlayground(NamedTuple):
#     form: forms.ExampleForm
#     form_as_p: forms.ExampleForm
#     form_set: forms.ChoiceFormSet


@template
class Register(NamedTuple):
    form_patient: forms.RegisterPatient
    form_investigator: forms.RegisterInvestigator

@template
class Login(NamedTuple):
    form_patient: forms.LoginPatient
    form_investigator: forms.LoginInvestigator

@template
class PortalPatient(NamedTuple):
    dailycheckin: forms.DailyCheckin

@template
class PortalInvestigator(NamedTuple):
    update: forms.Update
    appointment: forms.Appointment