<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function Login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (!$this->guard()->attempt($credentials)) {
            return response()->json([
                'message' => 'The provided credentials are incorrect.',
            ], 500);
        }

        return response()->json([
            'token' => $this->guard()->user()->createToken('auth-token')->plainTextToken,
        ], 200);
    }


    public function register($res)
    {
		$this->CreateUser($res);

        return 'Bearer ' . $userOrVal->createToken('electron', ['user'])->plainTextToken;
    }

    public function CreateUser($res){

        $validate = Validator::make($res->all(),[
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:255|confirmed',
        ],$messages = [
            'required' => ":attribute bo'sh bo'lmasligi kerak.",
            'unique' => ":attribute band.",
            'min' => ":attribute :min simboldan kam bo'lmasligi kerak.",
            'email' => ":attribute to'gri emas",
            'confirmed' => ":attributelar mos kelmayabdi"
        ],[
            'email' => "Email",
            'password' => 'Parol'
        ]);

        if($validate->fails()){
            return response()->json($validate->errors(),299);
        }
        
        return User::create([
            'name' => $res['name'],
            'email' => $res['email'],
            'city' => $res['city'],
            'password' => Hash::make($res['password']),
            'role' => $res['shop'],
            'shop_id' => $shopId,
        ]);
    }






    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $this->guard()->logout();
        return response()->json([
            'message' => 'logout',
        ], 200);
    }

    public function guard($guard = 'web')
    {
        return Auth::guard($guard);
    }
}
