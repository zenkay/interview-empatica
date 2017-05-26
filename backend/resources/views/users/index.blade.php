<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @foreach ($users as $user)
                Link to user <a href="{{ action('UserController@show', ['id' => $user->id]) }}">{{ $user->name }}</a>
            @endforeach
        </div>
    </body>
</html>
