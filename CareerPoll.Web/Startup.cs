﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CareerPoll.Web.Startup))]
namespace CareerPoll.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}