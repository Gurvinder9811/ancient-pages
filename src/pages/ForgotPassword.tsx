import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, BookOpen, ArrowLeft, CheckCircle, KeyRound, Quote } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Motivational Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-20 w-56 h-56 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-40 right-16 w-72 h-72 border border-primary-foreground/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary-foreground/20 rounded-full" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24">
          <Link to="/" className="inline-flex items-center gap-3 mb-16">
            <BookOpen className="h-10 w-10 text-primary-foreground" />
            <span className="text-3xl font-serif font-bold text-primary-foreground">Scriptoria</span>
          </Link>
          
          <div className="max-w-lg">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-8">
              <KeyRound className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl xl:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Don't Worry, It Happens to the Best of Us
            </h2>
            
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <Quote className="h-8 w-8 text-primary-foreground/40 mb-4" />
              <p className="text-xl text-primary-foreground/80 font-serif italic leading-relaxed">
                "The only real mistake is the one from which we learn nothing."
              </p>
              <p className="mt-4 text-primary-foreground/60">
                — Henry Ford
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-16 xl:left-24">
            <p className="text-primary-foreground/50 text-sm">
              We'll help you get back to reading in no time
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Reset Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2">
              <BookOpen className="h-10 w-10 text-primary" />
              <span className="text-3xl font-serif font-bold text-primary">Scriptoria</span>
            </Link>
          </div>

          {!isSubmitted ? (
            <>
              {/* Back Link */}
              <Link
                to="/login"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-10 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to login
              </Link>

              <div className="mb-10">
                <h1 className="text-3xl font-serif font-bold text-primary mb-3">
                  Forgot Password?
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  No worries! Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="scholar@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-card border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                >
                  Send Reset Link
                </Button>
              </form>

              {/* Additional Help */}
              <div className="mt-10 p-5 bg-card rounded-xl border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Need help?</strong> If you're having trouble accessing your account, please{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact our support team
                  </Link>.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-serif font-bold text-primary mb-4">
                Check Your Email
              </h1>
              
              <p className="text-muted-foreground mb-2">
                We've sent password reset instructions to
              </p>
              <p className="text-primary font-semibold mb-8">
                {email}
              </p>
              
              <p className="text-sm text-muted-foreground mb-8">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:underline font-medium"
                >
                  try again
                </button>
              </p>
              
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Back to Login
                </Button>
              </Link>
            </div>
          )}

          {/* Footer */}
          {!isSubmitted && (
            <p className="mt-10 text-center text-muted-foreground">
              Remember your password?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
