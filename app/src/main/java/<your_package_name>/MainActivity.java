package com.example.mygoogleloginapp; // अपने project का package name डालो

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private GoogleLoginPatch loginPatch;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // आपका existing layout

        // Button find करो (XML में वही ID रखो)
        Button googleButton = findViewById(R.id.googleSignInButton);

        // GoogleLoginPatch initialize करो
        loginPatch = new GoogleLoginPatch(this, googleButton);
    }

    // onActivityResult में Google login result handle करो
    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        loginPatch.handleResult(requestCode, resultCode, data);
    }
}
