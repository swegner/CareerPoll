using System.Net.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CareerPoll.Tests.Controllers
{
    [TestClass]
    public class AnswersControllerTests
    {
        [TestMethod]
        public void DefaultEndpointWorks()
        {
            // Arrange
            using (var client = new HttpClient())
            {
                // Act
                var getTask = client.GetAsync("http://localhost:1234/api/Answers");
                var getResponse = getTask.Result;

                Assert.IsTrue(getResponse.IsSuccessStatusCode);

                var responseMessage = getResponse.Content.ReadAsStringAsync().Result;
                Assert.IsNotNull(responseMessage);
            }
        }
    }
}