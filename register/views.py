from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from .forms import RegistrationForm
from django.contrib.auth.models import User
# Create your views here.



def register(request):

    if request.user.is_authenticated():
        return render(request, 'dashboard.html')

    form = RegistrationForm(request.POST or None)
    if form.is_valid():
        if request.method == 'POST':
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User(username=username, email=email, password=password)
            user.set_password(password)
            user.save()
            print 'user registered'

            user = authenticate(username=username, password=password)
            context = {'user' : user}

            if user is not None:
                if user.is_active:
                    login(request,user)
                    return render(request, 'dashboard.html', context)



    return render(request, 'register.html', {form:form})


def home(request):
    user = request.user
    return render(request, 'dashboard.html')