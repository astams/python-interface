
from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple

from jsonrpc import JSONRPCResponseManager, dispatcher
import monoIso


@dispatcher.add_method
def foobar(**kwargs):
    return kwargs["foo"] + kwargs["bar"]


@Request.application
def application(request):
    # Dispatcher is dictionary {<method_name>: callable}
    dispatcher["monoIso"] = lambda mzData, iData: monoIso.deisotope(mzData, iData)

    response = JSONRPCResponseManager.handle(
        request.get_data(cache=False, as_text=True), dispatcher)
    return Response(response.json, mimetype='application/json')

if __name__ == '__main__':
    run_simple('localhost', 59870, application)