package com.example.mygoogleloginapp; // अपने project का package name डालो

import android.app.Activity;
import android.content.Intent;
import android.widget.Button;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;

public class GoogleLoginPatch {

    private final Activity activity;
    private final GoogleSignInClient googleSignInClient;
    private final int RC_SIGN_IN = 1000;

    // PART 1: Initialize
    public GoogleLoginPatch(Activity activity, Button googleButton) {
        this.activity = activity;

        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .requestIdToken(activity.getString(R.string.default_web_client_id))
                .build();

        googleSignInClient = GoogleSignIn.getClient(activity, gso);

        // PART 2: Button click
        googleButton.setOnClickListener(v -> {
            Intent signInIntent = googleSignInClient.getSignInIntent();
            activity.startActivityForResult(signInIntent, RC_SIGN_IN);
        });
    }

    // PART 3: Handle Result
    public void handleResult(int requestCode, int resultCode, @Nullable Intent data) {
        if (requestCode == RC_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            try {
                GoogleSignInAccount account = task.getResult(ApiException.class);
                String name = account.getDisplayName();
                String email = account.getEmail();
                Toast.makeText(activity, "Welcome " + name, Toast.LENGTH_SHORT).show();
            } catch (ApiException e) {
                Toast.makeText(activity, "Login Failed", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
